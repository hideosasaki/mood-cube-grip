cubeGrip.onChange(function (strength) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Blue))
    cubeLight.setBrightness(strength)
})
input.onGesture(Gesture.Shake, function () {
    cubeVibe.start(2)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    cubeVibe.stop()
})
cubePair.setRole(CubeRole.Grip)
music.setVolume(90)
