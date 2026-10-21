#!/usr/bin/env bash
# Extends public/media/obmi-ai-reel.mp4 with the three Runway hero shots.
# Put these in ./runway/ (download from your Runway library):
#   shot1-sunrise.mp4  shot6-studio.mp4  shot8-twilight.mp4  music.mp3 (optional)
# Needs ffmpeg. Run from the project root: bash scripts/add-runway-shots.sh
set -e
R=runway; M=public/media; T=$(mktemp -d)
n(){ ffmpeg -y -v error -i "$1" -an -vf "scale=1280:720,fps=30,format=yuv420p" -c:v libx264 -crf 20 "$T/$2.mp4"; }
n $R/shot1-sunrise.mp4 s1; n $R/shot6-studio.mp4 s6; n $R/shot8-twilight.mp4 s8
ffmpeg -y -v error -i $M/obmi-ai-reel.mp4 -an -c:v copy $T/base.mp4
# order: sunrise, brand film body, studio (time back), twilight, end card
ffmpeg -y -v error -ss 0 -t 5.5 -i $T/base.mp4 -c:v libx264 -crf 20 $T/a.mp4
ffmpeg -y -v error -ss 5.5 -t 28 -i $T/base.mp4 -c:v libx264 -crf 20 $T/mid.mp4
ffmpeg -y -v error -ss 33.5 -i $T/base.mp4 -c:v libx264 -crf 20 $T/end.mp4
printf "file '%s/s1.mp4'\nfile '%s/a.mp4'\nfile '%s/mid.mp4'\nfile '%s/s6.mp4'\nfile '%s/s8.mp4'\nfile '%s/end.mp4'\n" $T $T $T $T $T $T > $T/l.txt
ffmpeg -y -v error -f concat -safe 0 -i $T/l.txt -c copy $T/v.mp4
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 $T/v.mp4)
A=${R}/music.mp3; [ -f $A ] || A=$(dirname $M)/../../../obmi-brand-video/audio/music.wav
ffmpeg -y -v error -i $T/v.mp4 -i "$A" -filter_complex "[1]atrim=0:$D,afade=t=out:st=$(python3 -c "print($D-3)"):d=3[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -shortest $M/obmi-ai-reel-extended.mp4
echo "Wrote $M/obmi-ai-reel-extended.mp4 - rename it to obmi-ai-reel.mp4 and update chapters in src/data/storyboard.js"
