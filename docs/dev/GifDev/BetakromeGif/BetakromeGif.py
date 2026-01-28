from PIL import Image, ImageSequence
import copy

def overlay_png_on_gif(gif_path, png_path, output_path, position=(0, 0)):
    """
    Overlays a transparent PNG image on each frame of an animated GIF.

    Args:
        gif_path (str): Path to the input GIF file.
        png_path (str): Path to the input PNG file (must have transparency).
        output_path (str): Path to save the output animated GIF.
        position (tuple): The (x, y) coordinates for the top-left corner 
                          of the PNG overlay (default: (0, 0)).
    """
    try:
        animated_gif = Image.open(gif_path)
        # Open the PNG and ensure it has an alpha channel for transparency
        png_overlay = Image.open(png_path).convert('RGBA')
    except IOError as e:
        print(f"Error opening images: {e}")
        return

    frames = []
    # Iterate through each frame of the animated GIF
    for frame in ImageSequence.Iterator(animated_gif):
        # The frame needs to be converted to RGBA mode to handle transparency properly
        frame = frame.convert('RGBA')
        
        # Create a copy to paste onto
        new_frame = frame.copy()
        
        # Paste the PNG overlay onto the current frame
        # The png_overlay itself is used as the mask due to its alpha channel
        new_frame.paste(png_overlay, position, mask=png_overlay)
        
        frames.append(new_frame)

    # Save the new list of frames as an animated GIF
    if frames:
        # Get duration and loop settings from original GIF
        duration = animated_gif.info.get('duration', 100)
        loop = animated_gif.info.get('loop', 0)

        frames[0].save(
            output_path,
            save_all=True,
            append_images=frames[1:],
            duration=duration,
            loop=loop,
            format='GIF'
        )
        print(f"Successfully created animated GIF: {output_path}")
    else:
        print("No frames were processed.")


# Example usage:
if __name__ == "__main__":
    # Replace with your file paths and desired output path
    input_gif = 'C:\Users\chris\klimbeta\docs\dev\GifDev\BetakromeGif\Input\input.gif'
    input_png = 'C:\Users\chris\klimbeta\docs\dev\GifDev\BetakromeGif\Input\overlay.png'
    output_gif = 'C:\Users\chris\klimbeta\docs\dev\GifDev\BetakromeGif\Output\output_with_overlay.gif'
    
    # Optional: adjust the position of the PNG (e.g., top-left corner)
    overlay_position = (50, 50) 

    overlay_png_on_gif(input_gif, input_png, output_gif, position=overlay_position)
