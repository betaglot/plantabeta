import pygame
import pymunk
import pymunk.pygame_util
import math

# --- Configuration ---
WIDTH, HEIGHT = 800, 600
GRAVITY = 900
FPS = 60

# Only apply constraints to the middle joint (index 1)
JOINT_LIMITS = [(-80, 120), (0, 180), (-180, 180)]
SEGMENT_LENGTHS = [100, 100, 150]
BOB_RADIUS = 15
BOB_MASS = 500 

def create_pendulum_segment(space, previous_body, anchor_point, length, limits, is_last=False):
    # 1. Create the Arm Segment
    mass = 1.0
    moment = pymunk.moment_for_segment(mass, (0, 0), (0, length), 5)
    body = pymunk.Body(mass, moment)
    body.position = anchor_point
    
    shape = pymunk.Segment(body, (0, 0), (0, length), 5)
    shape.elasticity = 0.5
    shape.filter = pymunk.ShapeFilter(group=1)
    space.add(body, shape)

    # 2. Add the heavy Bob to the distal end if it's the last segment
    if is_last:
        # Calculate inertia for the circle at the end of the segment
        bob_moment = pymunk.moment_for_circle(BOB_MASS, 0, BOB_RADIUS, (0, length))
        body.moment += bob_moment
        
        # Create the bob shape attached at the offset (0, length)
        bob_shape = pymunk.Circle(body, BOB_RADIUS, (0, length))
        bob_shape.color = (239, 191, 4, 255)
        bob_shape.elasticity = 0.5
        space.add(bob_shape)

    # 3. Physical Connection (Pivot)
    pivot = pymunk.PivotJoint(previous_body, body, anchor_point)
    space.add(pivot)
    
    # 4. Apply constraint only if limits are a tuple (Middle Joint)
    if isinstance(limits, tuple):
        min_rad = math.radians(limits[0])
        max_rad = math.radians(limits[1])
        limit = pymunk.RotaryLimitJoint(previous_body, body, min_rad, max_rad)
        space.add(limit)
    
    # The next anchor is the world position of the end of this segment
    # Since it hangs straight down initially:
    next_anchor_pos = (anchor_point[0], anchor_point[1] + length)
    return body, next_anchor_pos

def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Triple Pendulum: Middle-Joint Constrained + End Mass")
    clock = pygame.time.Clock()
    draw_options = pymunk.pygame_util.DrawOptions(screen)
    font = pygame.font.SysFont("Arial", 16)

    space = pymunk.Space()
    space.gravity = (0, GRAVITY)

    static_body = space.static_body
    curr_anchor = (WIDTH // 2, 150)
    bodies = []
    initial_states = []

    space.damping = 0.97 

    # Build segments
    last_body = static_body
    for i in range(3):
        is_last = (i == 2)
        new_body, curr_anchor = create_pendulum_segment(
            space, last_body, curr_anchor, SEGMENT_LENGTHS[i], JOINT_LIMITS[i], is_last
        )
        bodies.append(new_body)
        # Store initial position and angle for reset
        initial_states.append((new_body.position, new_body.angle))
        last_body = new_body

    # Interaction State
    mouse_joint = None
    mouse_body = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
    paused = False

    # Buttons
    freeze_btn = pygame.Rect(WIDTH - 130, 20, 110, 40)
    reset_btn = pygame.Rect(WIDTH - 130, 70, 110, 40)

    running = True
    while running:
        mouse_pos = pygame.mouse.get_pos()
        mouse_body.position = mouse_pos

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            
            if event.type == pygame.MOUSEBUTTONDOWN:
                if freeze_btn.collidepoint(mouse_pos):
                    paused = not paused
                elif reset_btn.collidepoint(mouse_pos):
                    for i, body in enumerate(bodies):
                        body.position, body.angle = initial_states[i]
                        body.velocity = (0, 0)
                        body.angular_velocity = 0
                    paused = True
                else:
                    hit = space.point_query_nearest(mouse_pos, 0, pymunk.ShapeFilter())
                    if hit and hit.shape.body != static_body:
                        local_pt = hit.shape.body.world_to_local(mouse_pos)
                        mouse_joint = pymunk.PivotJoint(mouse_body, hit.shape.body, (0,0), local_pt)
                        mouse_joint.max_force = 1e6
                        space.add(mouse_joint)
            
            if event.type == pygame.MOUSEBUTTONUP:
                if mouse_joint:
                    space.remove(mouse_joint)
                    mouse_joint = None

        if not paused:
            space.step(1.0 / FPS)

        # Drawing
        screen.fill((30, 30, 35))
        space.debug_draw(draw_options)

        # UI Overlay
        for btn, text, col in [(freeze_btn, "RESUME" if paused else "FREEZE", (80, 80, 80)), 
                               (reset_btn, "RESET", (120, 50, 50))]:
            pygame.draw.rect(screen, col, btn, border_radius=5)
            txt_surf = font.render(text, True, (255, 255, 255))
            screen.blit(txt_surf, txt_surf.get_rect(center=btn.center))
        
        info = font.render("Constraints: Middle Joint Only (-30° to 30°)", True, (180, 180, 180))
        screen.blit(info, (20, 20))

        pygame.display.flip()
        clock.tick(FPS)

    pygame.quit()


main()
