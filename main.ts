cubeGrip.onChange(function (strength) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
    cubeLight.setBrightness(strength)
})
input.onGesture(Gesture.Shake, function () {
    if (音 == 1) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("C D E F G A B C5 ", 1000), music.PlaybackMode.UntilDone)
    }
    cubeVibe.stop()
})
cubeTouch.onPinStuck(function (face) {
    音 = 0
    cubeLight.setBrightness(3)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(100)
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Black))
    音 = 1
})
cubeGrip.onMaxReached(function () {
    music.play(music.createSoundExpression(WaveShape.Square, 307, 20, 183, 255, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    cubeVibe.pulse(1, 100)
    music.play(music.createSoundExpression(WaveShape.Square, 307, 20, 183, 255, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    cubeVibe.pulse(2, 100)
    music.play(music.createSoundExpression(WaveShape.Square, 307, 20, 183, 255, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    cubeVibe.pulse(3, 100)
    music.play(music.createSoundExpression(WaveShape.Square, 307, 20, 183, 255, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    cubeVibe.pulse(5, 500)
})
let 音 = 0
cubePair.setRole(CubeRole.Grip)
music.setVolume(255)
音 = 1
