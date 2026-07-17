cubeGrip.onMaxReleased(function () {
    music.setVolume(255)
    music.play(music.createSoundExpression(WaveShape.Sine, 1600, 399, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    music.setVolume(90)
})
cubeGrip.onChange(function (strength) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
    cubeLight.setBrightness(strength)
})
input.onGesture(Gesture.Shake, function () {
    cubeVibe.start(2)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    cubeVibe.stop()
})
cubeTouch.onPinStuck(function (face) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Green))
    cubeLight.setBrightness(1)
    basic.pause(100)
    cubeLight.setBrightness(0)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
})
cubeGrip.onMaxReached(function () {
    cubeVibe.pulse(5, 5000)
})
cubePair.setRole(CubeRole.Grip)
music.setVolume(90)
