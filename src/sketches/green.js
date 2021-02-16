import p5 from 'p5'
import WindowResized from "./mixin/WindowResized";

export default p => {
    Object.assign(p, WindowResized(p))

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        console.log('green loaded')
    }

    p.draw = () => {
        const ctr = getCenter()
        p.background(p.color(0, 255, 0, 32))
        p.fill(0, 255, 0)
        p.circle(ctr.x, ctr.y, 100)
        p.noLoop()
    }
    const getCenter = () => {
        return new p5.Vector(p.width, p.height).mult(0.5)
    }
}