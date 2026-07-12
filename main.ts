input.onGesture(Gesture.Shake, function () {
    music.setVolume(10)
    music.play(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
cubeTouch.onPinStuck(function (face) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
    cubeLight.setBrightness(9)
    cubeVibe.pulse(5, 200)
    cubeLight.setBrightness(0)
})
cubePair.setRole(CubeRole.Grip)
