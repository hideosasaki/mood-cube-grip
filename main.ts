cubeGrip.onChange(function (strength) {
    cubeVibe.start(strength)
})
input.onGesture(Gesture.Shake, function () {
    music.setVolume(10)
    music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
cubePair.setRole(CubeRole.Grip)
