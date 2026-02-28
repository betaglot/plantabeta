import pygame
import pymunk
import pymunk.pygame_util
import math

# --- Configuration ---
WIDTH, HEIGHT = 900, 700
GRAVITY = 900
FPS = 60

# Pendulum Properties (Lengths/Masses for 3 segments)
LENGTHS = [120, 120, 120]
MASSES = [5, 5, 5]

# Joint Constraints (Relative radians)
# Joint 1: +/- 60 deg from vertical
# Joint 2: +/- 90 deg relative to Rod 1
# Joint 3: +/- 90 deg relative to Rod 2
LIMITS = [
    (-math.pi/3, math.pi/3), 
    (-math.pi/2, math.pi/2),
    (-math.pi/2, math.pi/2)
]

class TriplePendulum:
    def __init__(self, space, start_pos):
        self.bodies = []
        self.shapes = []
        prev_body = space.static_body
        prev_pos = start_pos

        for i in range(3):
            # Create Rod Body
            mass = MASSES[i]
            length = LENGTHS[i]
            moment = pymunk.moment_for_segment(mass, (0, 0), (0, length), 5)
            body = pymunk.Body(mass, moment)
            body.position = prev_pos
            
            # Create Rod Shape
            shape = pymunk.Segment(body, (0, 0), (0, length), 5)
            shape.filter = pymunk.ShapeFilter(group=1) # Disable self-collision
            shape.elasticity = 0.5
            
            # Pivot Connection
            pivot = pymunk.PivotJoint(prev_body, body, prev_pos)
            
            # Angle Constraint (Degrees of Freedom)
            limit = pymunk.RotaryLimitJoint(prev_body, body, LIMITS[i][0], LIMITS[i][1])
            
            space.add(body, shape, pivot, limit)
            self.bodies.append(body)
            self.shapes.append(shape)
            
            # Update anchor for next rod
            prev_body = body
            prev_pos = (prev_pos[0], prev_pos[1] + length)

def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    clock = pygame.time.Clock()
    draw_options = pymunk.pygame_util.DrawOptions(screen)
    
    space = pymunk.Space()
    space.gravity = (0, GRAVITY)
    
    # Create Pendulum
    pendulum = TriplePendulum(space, (WIDTH//2, 150))
    
    # Mouse Interaction
    mouse_body = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
    mouse_joint = None
    
    # Path Tracing
    trace_points = []
    
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            
            if event.type == pygame.MOUSEBUTTONDOWN:
                if mouse_joint: space.remove(mouse_joint)
                p = pymunk.pygame_util.from_pygame(event.pos, screen)
                hit = space.point_query_nearest(p, 0, pymunk.ShapeFilter())
                if hit and hit.shape.body != space.static_body:
                    # Anchor the spring to the end of the clicked rod
                    mouse_joint = pymunk.DampedSpring(mouse_body, hit.shape.body, (0,0), (0, 100), 0, 2000, 20)
                    space.add(mouse_joint)
            
            if event.type == pygame.MOUSEBUTTONUP:
                if mouse_joint:
                    space.remove(mouse_joint)
                    mouse_joint = None

        # Update Mouse
        mouse_pos = pygame.mouse.get_pos()
        mouse_body.position = pymunk.pygame_util.from_pygame(mouse_pos, screen)

        # Physics Step
        space.step(1.0/FPS)

        # Record Trace of the last bob
        # Get the world position of the end of the 3rd rod
        last_body = pendulum.bodies[-1]
        tip_pos = last_body.position + last_body.rotation_vector * LENGTHS[-1]
        py_tip_pos = pymunk.pygame_util.to_pygame(tip_pos, screen)
        trace_points.append(py_tip_pos)
        if len(trace_points) > 150: trace_points.pop(0) # Keep trace short for performance

        # Rendering
        screen.fill((240, 240, 240))
        
        # Draw Trace Path
        if len(trace_points) > 2:
            pygame.draw.lines(screen, (200, 0, 0), False, trace_points, 2)
            
        space.debug_draw(draw_options)
        
        # UI Text
        font = pygame.font.SysFont("Arial", 16)
        screen.blit(font.render("Triple Pendulum with Joint Constraints", True, (50,50,50)), (20, 20))
        screen.blit(font.render("Drag any rod to interact", True, (100,100,100)), (20, 40))
        
        pygame.display.flip()
        clock.tick(FPS)

    pygame.quit()


main()
