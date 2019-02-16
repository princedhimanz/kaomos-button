class kaomosButton extends HTMLElement{

    constructor(){
        super()
        let _style = document.createElement('style')
        _style.innerHTML = `
            kaomos-button{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `
        document.body.appendChild(_style)
        this.running = false
        this._container = document.createElement('div')
        this._container.classList.add('container')
        this._container.innerHTML = `
            <style>
                .loader{
                    display: none;
                    position: ${this._getPostion()};
                    width: ${this._getWidth()}px;
                    height:  ${this._getHeight()}px;
                }

                svg{
                    animation: rotate ${this.getAttribute('loader-speed') || 2.5}s linear infinite;
                    transform-origin: center center;
                    height: ${this.getAttribute('loader-size') || '60'}%;
                    width:  ${this.getAttribute('loader-size') || '60'}%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    stroke: ${this.getAttribute('loader-color') || '#ffffff'};
                }

                .path {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                    animation: dash ${(this.getAttribute('loader-speed') || 2.5) - 0.5}s ease-in-out infinite;
                    stroke-linecap: round;
                }

                p{
                    width: 100%;
                    height: 100%;
                    text-align: center;
                }

                @keyframes rotate {
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                  
                  @keyframes dash {
                    0% {
                      stroke-dasharray: 1, 200;
                      stroke-dashoffset: 0;
                    }
                    50% {
                      stroke-dasharray: 89, 200;
                      stroke-dashoffset: -35px;
                    }
                    100% {
                      stroke-dasharray: 89, 200;
                      stroke-dashoffset: -124px;
                    }
                  }

                @keyframes rotate{
                    from{
                        transform: rotate(0deg);
                    }
                    to{
                        transform: rotate(360deg);
                    }
                }
            </style>
            <div class="loader">
                <svg viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width=${this.getAttribute('loader-width') || '4'} stroke-miterlimit="10"/>
                </svg>
            </div>
            <p>${this.getAttribute('label') || 'Your label'}</p>
        `
        const _shadowRoot = this.attachShadow({mode: 'open'})
        _shadowRoot.appendChild(this._container)
    
        window.addEventListener('resize', () => {
            this.update()
        })
    }

    _getPostion(){
        if(window.getComputedStyle(this).getPropertyValue('position') == 'static'){
            return 'relative'
        }else{
            return 'static'
        }
    }

    _getWidth(){
        if(this._getPostion() == 'relative'){
            return String(this.offsetWidth)
        }else{
            return '300'
        }
    }

    _getHeight(){
        if(this._getPostion() == 'relative'){
            return String(this.offsetHeight)
        }else{
            return '50'
        }
    }

    update(){
        if(this._getPostion() == 'relative'){
            let loader = this._container.getElementsByClassName('loader')[0]
            loader.style.width = `${this._getWidth()}px`
            loader.style.height = `${this._getHeight()}px`
        }
    }

    isRunning(){
        return this.running
    }

    start(){
        if(!this.running){
            this.running = true
            this._container.getElementsByTagName('p')[0].style.display = 'none'
            this._container.getElementsByClassName('loader')[0].style.display = 'block'
        }
    }
    stop(){
        if(this.running){
            this._container.getElementsByClassName('loader')[0].style.display = 'none'
            this._container.getElementsByTagName('p')[0].style.display = 'block'
            this.running = false;
        }
    }

    toggle(){
        if(!this.running){
            this.start()
        }else if(this.running){
            this.stop()
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('kaomos-button', kaomosButton)
})