import os
import subprocess
import glob

def convert_mp4_to_gif(input_dir, output_dir):

    # Find all MP4 files in the input directory
    mp4_files = glob.glob(os.path.join(input_dir, '*.mp4'))

    if not mp4_files:
        print(f"No MP4 files found in '{input_dir}'")
        return

    print(f"Found {len(mp4_files)} files to convert.")

    for input_file in mp4_files:
        filename = os.path.basename(input_file)
        output_file = os.path.join(output_dir, os.path.splitext(filename)[0] + '.gif')
        palette_file = os.path.join(output_dir, 'palette.png')

        # Define the desired video filters: 12 fps, 480px width (height auto-adjusted)
        # and use the lanczos scaling algorithm for better quality
        video_filters = "fps=8,scale=720:-1:flags=lanczos"
        # video_filters = ""

        # Step 1: Generate an optimized color palette for the video
        palette_command = [
            'ffmpeg', '-y', '-i', input_file,
            '-vf', f"{video_filters},palettegen",
            palette_file
        ]

        # Step 2: Convert the video to GIF using the generated palette
        gif_command = [
            'ffmpeg', '-y', '-i', input_file, '-i', palette_file,
            '-filter_complex', f"{video_filters}[x];[x][1:v]paletteuse",
            output_file
        ]
        
        try:
            print(f"Converting {filename}...")
            # Run palette generation command
            subprocess.run(palette_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            # Run GIF conversion command
            subprocess.run(gif_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            print(f"Successfully converted {filename} to {os.path.basename(output_file)}")
        except subprocess.CalledProcessError as e:
            print(f"Error converting {filename}: {e.stderr.decode()}")
        except FileNotFoundError:
            print("FFmpeg command not found. Please ensure FFmpeg is installed and added to your system's PATH.")
            return

    # Clean up the temporary palette file
    if os.path.exists(palette_file):
        os.remove(palette_file)
        print("Cleaned up temporary palette file.")

if __name__ == "__main__":
    # Set your input and output directory paths here
    input_directory = r"C:\Users\chris\OneDrive\Desktop\Betaglot_Video\PlantaBeta-VideoToGif"
    output_directory = r"C:\Users\chris\plantabeta\docs\dev\GifDev\ConvertVideoToGif\output_gifs"
    convert_mp4_to_gif(input_directory, output_directory)
