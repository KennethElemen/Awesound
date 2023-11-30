const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'notification', 'to-be-continued','scary-intense', 'swoosh', 'sad-piano', 'BAGSAK', 'dalawang-beses-nayan']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}