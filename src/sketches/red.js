import p5 from 'p5'
import WindowResized from "./mixin/WindowResized"




const sketch = p => {

    Object.assign(p, WindowResized(p))

    let ctr

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        console.log('red loaded')
    }

    p.draw = () => {
        ctr = getCenter()
        p.background(0)
        p.fill(255, 0, 0)
        p.circle(ctr.x, ctr.y, 100)
    }

    const getCenter = () => {
        return new p5.Vector(p.width, p.height).mult(0.5)
    }

}

export default sketch