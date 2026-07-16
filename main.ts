cubeGrip.onChange(function (strength) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Blue))
    cubeLight.setBrightness(strength)
})
input.onGesture(Gesture.Shake, function () {
    cubeVibe.start(2)
    music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    cubeVibe.stop()
})
cubePair.setRole(CubeRole.Grip)
music.setVolume(90)
