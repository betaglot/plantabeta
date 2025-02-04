# VideoCaption

## HH:MM:SS to seconds

## Video into shorts

<https://stackoverflow.com/questions/18444194/cutting-multimedia-files-based-on-start-and-end-time-using-ffmpeg>

```py
ffmpeg -ss 00:01:00 -to 00:02:00 -i input.mp4 -c copy output.mp4
```

-i This specifies the input file. In that case, it is (input.mp4).
-ss Used with -i, this seeks in the input file (input.mp4) to position.
00:01:00 This is the time your trimmed video will start with.
-to The next argument after -to specifies the position (counted from the start of the entire, original video) at which FFmpeg should stop reading the data (00:02:00).
00:02:00 This is the time your trimmed video will end with.
-c copy This is an option to trim via stream copy. (NB: Very fast)