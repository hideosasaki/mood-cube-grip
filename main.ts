cubeGrip.onMaxReleased(function () {
    music.setVolume(255)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 416, 126, 251, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    music.setVolume(90)
})
cubeGrip.onChange(function (strength) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
    cubeLight.setBrightness(strength)
})
input.onGesture(Gesture.Shake, function () {
    cubeVibe.start(2)
    if (音 == 1) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("C D E F G A B C5 ", 1000), music.PlaybackMode.UntilDone)
    }
    cubeVibe.stop()
})
cubeTouch.onPinStuck(function (face) {
    音 = 0
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Green))
    cubeLight.setBrightness(1)
    basic.pause(5000)
    cubeLight.setBrightness(0)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
    音 = 1
})
cubeGrip.onMaxReached(function () {
    cubeVibe.pulse(5, 5000)
})
let 音 = 0
cubePair.setRole(CubeRole.Grip)
music.setVolume(90)
音 = 1
