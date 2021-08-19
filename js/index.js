        const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')
        const $progress = document.querySelector('#progress')


        //eventos//
        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)
        $backward.addEventListener('click', handleBackward)
        $forward.addEventListener('click', handleForward) 
        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeUpdate)
        $progress.addEventListener('input', handleInput)


        //funciones//
        function handlePlay() {
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al boton play')
        }

        function handlePause() {
            $video.pause()
            $pause.hidden = true
            $play.hidden = false
            console.log('le diste click al boton pause')
        }

        function handleBackward() {
            $video.currentTime -=10 
            console.log('para atrás 10 segundos')
        }

       function handleForward() {
           $video.currentTime +=10
            console.log('para adelante 10 segundos', $video.currentTime)
        }

        function handleLoaded() {
            $progress.max = $video.duration
            console.log('ha cargado mi video', $video.duration)
        }

        function handleTimeUpdate() {
            $progress.value = $video.currentTime
            // console.log('tiempo actual', $video.currentTime) //
        }

        function handleInput() {
            $video.currentTime = $progress.value
            console.log($progress.value)
        }



