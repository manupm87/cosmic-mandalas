let G = 150
const FRAME_TIME = 1000/60 // Anyithing below 50 (ms) should sufice. FRAME_RATE = 1000/FRAME_TIME (should be higher than 20 fps)

class World {
  constructor(){
    let init_speed = 1.6
    let init_mass = 80
    this.size = { x: 900, y: 900 }
    // this.bodies = [
    //   new Body({ x: this.size.x * 6/24, y: this.size.y/2 }, init_mass * 1/2, { x: 0, y: init_speed/4 }),
    //   new Body({ x: this.size.x * 10/24, y: this.size.y/2 }, init_mass * 1/4, { x: 0, y: -init_speed/2 }),
    //   new Body({ x: this.size.x * 14/24, y: this.size.y/2 }, init_mass * 1/4, { x: 0, y: init_speed/2 }),
    //   new Body({ x: this.size.x * 18/24, y: this.size.y/2 }, init_mass * 1/2, { x: 0, y: -init_speed/4 })
    // ]
    // this.bodies = [
    //   new Body({ x: this.size.x * 8/24, y: this.size.y/2 }, init_mass, { x: init_speed/4, y: init_speed/4 }),
    //   new Body({ x: this.size.x * 12/24, y: this.size.y/2 + this.size.x * 4/24 }, init_mass, { x: init_speed/4, y: -init_speed/4 }),
    //   new Body({ x: this.size.x * 12/24, y: this.size.y/2 - this.size.x * 4/24 }, init_mass, { x: -init_speed/4, y: init_speed/4 }),
    //   new Body({ x: this.size.x * 16/24, y: this.size.y/2 }, init_mass, { x: -init_speed/4, y: -init_speed/4 }),
    // ]
    // this.bodies = [
    //   new Body({ x: this.size.x * 8/24, y: this.size.y/2 }, init_mass * 1/2, { x: 0, y: -init_speed/4 }),
    //   new Body({ x: this.size.x * 12/24, y: this.size.y/2 }, init_mass * 1, { x: 0, y: init_speed/4 }),
    //   new Body({ x: this.size.x * 16/24, y: this.size.y/2 }, init_mass * 1/8, { x: 0, y: -2*init_speed/4 }),
    // ]
    // Sun & Earth simulation 1
    // G = 460
    // init_speed = 2.0
    // init_mass = 360
    // this.bodies = [
    //   new Body({ x: this.size.x * 46/96, y: this.size.y/2 }, init_mass * 16/16, { x: 0, y: -init_speed * (1/16) }),
    //   new Body({ x: this.size.x * 80/96, y: this.size.y/2 }, init_mass * 1/16, { x: 0, y: init_speed * 16/16 }),
    // ]
    // Sun, Earth & moon simulation 1 - Non restricted moon - Non fixed sun
    // G = 320
    // init_speed = 2.0
    // init_mass = 360
    // this.bodies = [
    //   new Body({ x: this.size.x * 46/96, y: this.size.y/2 }, init_mass * 17/24, { x: 0, y: -init_speed * (1/16 + 1/24/24) }),
    //   new Body({ x: this.size.x * 72/96, y: this.size.y/2 }, init_mass * 1/24, { x: 0, y: init_speed * 16/16 }),
    //   new Body({ x: this.size.x * 74/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: init_speed * 32/16 }),
    // ]
    // Sun, Earth & moon simulation 2 - Non restricted moon - Fixed sun
    // G = 320
    // init_speed = 2.0
    // init_mass = 360
    // this.bodies = [
    //   // new Body({ x: this.size.x * 46/96, y: this.size.y/2 }, init_mass * 17/24, { x: 0, y: -init_speed * (1/16 + 1/24/24) }),
    //   new Body({ x: this.size.x * 46/96, y: this.size.y/2 }, init_mass * 17/24, { x: 0, y: 0 }, true),
    //   new Body({ x: this.size.x * 72/96, y: this.size.y/2 }, init_mass * 1/24, { x: 0, y: init_speed * 16/16 }),
    //   new Body({ x: this.size.x * 74/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: init_speed * 32/16 }),
    // ]
    // Sun, Earth & moon simulation 3 - restricted moon - Non fixed sun
    // G = 320
    // init_speed = 2.0
    // init_mass = 360
    // this.bodies = [
    //   new Body({ x: this.size.x * 46/96, y: this.size.y/2 }, init_mass * 16/24, { x: 0, y: -init_speed * (1/16) }),
    //   new Body({ x: this.size.x * 72/96, y: this.size.y/2 }, init_mass * 1/24, { x: 0, y: init_speed * 16/16 }),
    //   new Body({ x: this.size.x * 74/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: init_speed * 32/16 }, false, true),
    // ]
    // Sun, Earth & moon simulation 4 - restricted moon - fixed sun
    // G = 420
    // init_speed = 2.2
    // init_mass = 360
    // this.bodies = [
    //   new Body({ x: this.size.x * 46/96, y: this.size.y/2 }, init_mass * 16/24, { x: 0, y: 0 }, true),
    //   new Body({ x: this.size.x * 80/96, y: this.size.y/2 }, init_mass * 1/24, { x: 0, y: init_speed * 32/32 }),
    //   new Body({ x: this.size.x * 82/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: 0 }, false, true),
    //   new Body({ x: this.size.x * 78/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: 0 }, false, true),
    //   new Body({ x: this.size.x * 82/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: init_speed * 65/32 }, false, true),
    //   new Body({ x: this.size.x * 78/96, y: this.size.y/2 }, init_mass * 1/24/24, { x: 0, y: init_speed * 65/32 }, false, true),
    // ]
    // Trisolaris
    G = 140
    init_speed = 1
    init_mass = 360
    this.bodies = [
      // Center Sun
      new Body({ x: this.size.x * 48/96, y: this.size.y/2 }, init_mass * 3/24, { x: 0, y: 0 }, true, true),
      // Smaller outer Suns
      new Body({ x: this.size.x * 58/96, y: this.size.y/2 }, init_mass * 5/24, { x: 0, y: init_speed * 16/32 }),
      new Body({ x: this.size.x * 38/96, y: this.size.y/2 }, init_mass * 5/24, { x: 0, y: -init_speed * 16/32 }),
      // Trisolaris
      new Body({ x: this.size.x * 48/96, y: this.size.y * 6/96 }, init_mass * 1/24, { x: init_speed * 30/32, y: 0 }, false, true),
    ]
    // this.bodies = [
    //   new Body({ x: this.size.x * 8/24, y: this.size.y/2 }, init_mass, { x: 0, y: 1/4* init_speed }),
    //   new Body({ x: this.size.x * 16/24, y: this.size.y/2 }, init_mass, { x: 0, y: -1/4* init_speed }),
    // ]
    // this.bodies = [
    //   new Body({ x: this.size.x * 8/24, y: this.size.y/2 }, 4*init_mass, { x: init_speed* 0, y: init_speed* 1/16 }),
    //   new Body({ x: this.size.x * 16/24, y: this.size.y/2 }, 1/4 * init_mass, { x: 0, y: -1/2* init_speed }),
    // ]
  }

  computeWorld(dt){
    let bodies = []
    for (const body of this.bodies){
      bodies.push(body.copy())
    }

    for (const body of this.bodies){
      body.computeForces(bodies)
      body.computeVelocity(dt)
      body.computePosition()
      // console.log(body.toString())
    }
  }

  loadExperiment(){
    const experiment_idx = Math.floor(Math.random() * experiments.length)
    const experiment = experiments[experiment_idx]
    this.bodies = []
    G = experiment.g
    for (const body of experiment.bodies) {
      this.bodies.push(new Body({ x: body.pos.x, y: body.pos.y }, body.mass, { x: body.v.x, y: body.v.y }, body.isFixed, body.isRestricted))
    }
    console.log(experiments)
  }
}

class Force {
  constructor(x, y){
    this.x = x
    this.y = y
  }

  toString() {
    return `Fx: ${this.x}, Fy: ${this.y}`
  }
}


class Body {
  constructor(pos, mass, v, isFixed = false, isRestricted = false){
    this.id = crypto.randomUUID()
    this.pos = {x: pos.x, y: pos.y}
    this.mass = mass
    this.v = {x: v.x, y: v.y}
    this.forces = []
    this.isFixed = isFixed
    this.isRestricted = isRestricted
    //this.color = `#${(255-this.id.charCodeAt(0)).toString(16)}${(255-this.id.charCodeAt(1)).toString(16)}${(255-this.id.charCodeAt(2)).toString(16)}`
    this.color = `#${(156 + Math.floor(Math.random() * 101)).toString(16)}${(156 + Math.floor(Math.random() * 101)).toString(16)}${(156 + Math.floor(Math.random() * 101)).toString(16)}`
  }

  copy(){
    let copy = new Body(this.pos, this.mass, this.v, this.isFixed, this.isRestricted)
    copy.id = this.id
    return copy
  }

  /**
   * @param {Body} body 
   */
  forceTowards(body) {
    let alpha = Math.atan2(body.pos.y - this.pos.y, body.pos.x - this.pos.x)
    // let F = G * (this.mass * body.mass) / this.distanceTo(body) ** 2
    let F = G * (body.mass) / this.distanceTo(body) ** 2
    return new Force(F * Math.cos(alpha), F * Math.sin(alpha))
  }

  /**
   * @param {Body} body 
   */
  distanceTo(body) {
    return Math.sqrt((this.pos.x - body.pos.x)**2 + (this.pos.y - body.pos.y)**2)
  }

  /**
   * @param {[Body]} bodies 
   */
  computeForces(bodies){
    this.forces = []
    for (const body of bodies){
      if (!this.isFixed && !body.isRestricted && body.id != this.id) {
        this.forces.push(this.forceTowards(body))
      }
    }
  }

  computeVelocity(dt){
    let vel_x = this.v.x
    let vel_y = this.v.y
    for (const force of this.forces){
      vel_x = vel_x + force.x * dt / 1000
      vel_y = vel_y + force.y * dt / 1000
    }
    this.v = {
      x: Math.abs(vel_x) < 1e-12 ? 0 : vel_x, 
      y: Math.abs(vel_y) < 1e-12 ? 0 : vel_y
    }
  }

  computePosition(){
    let pos_x = this.pos.x
    let pos_y = this.pos.y
    this.pos = {
      x: pos_x + this.v.x,
      y: pos_y + this.v.y
    }
  }

  toString() {
    return `${this.id}: Xx:${this.pos.x}, Xy:${this.pos.y}; Vx:${this.v.x}, Vy:${this.v.y}; Forces:${this.forces}}}`
  }
}

class Renderer {
  constructor(front_canvas, back_canvas) {
		this.front = front_canvas.getContext('2d');
		this.back = back_canvas.getContext('2d');
	}

  clearCanvas() {
		this.front.clearRect(0, 0, this.front.canvas.clientWidth, this.front.canvas.clientHeight);
	}
  resetCanvas() {
		this.front.clearRect(0, 0, this.front.canvas.clientWidth, this.front.canvas.clientHeight);
		this.back.clearRect(0, 0, this.front.canvas.clientWidth, this.front.canvas.clientHeight);
	}
  renderBody(body){
    this.front.fillStyle = body.color;
		this.front.beginPath();
		this.front.arc(body.pos.x, body.pos.y, (1000 + 100*body.mass)/500, 0, 2 * Math.PI, false);
		this.front.fill();
  }
  renderOrbit(body){
    this.back.beginPath()
    this.back.lineWidth = 1
    this.back.strokeStyle = body.color;  // This path is green.
    this.back.moveTo(body.pos.x, body.pos.y);
    this.back.lineTo(body.pos.x - body.v.x, body.pos.y - body.v.y);
    this.back.stroke();
  }
  renderWorld(world){
    this.clearCanvas()
    for (const body of world.bodies) {
      this.renderBody(body)
      this.renderOrbit(body)
    }
  }
}

class Game {
  constructor(front_canvas, back_canvas){
    this.world = new World()
    this.renderer = new Renderer(front_canvas, back_canvas)
  }

  gameLoop(start){
    const dt = performance.now() - start
    this.world.computeWorld(FRAME_TIME)
    this.renderer.renderWorld(this.world)
    requestAnimationFrame((start) => {
      this.gameLoop(start)
    })
  }
  start = function() {
    // setInterval(() => {
    //   this.world.computeWorld(FRAME_TIME)
    //   this.renderer.renderWorld(this.world)
    // }, FRAME_TIME)
    requestAnimationFrame((start) => {
      this.gameLoop(start)
    })
  }
}

let game, gui;
window.onload = function() {
  restart()
}

class GUI {
  loadExperiment(world){
    let dom_body_template = document.getElementById("body_template")
    let dom_settings = document.getElementById("settings")
    for (const body of world.bodies) {
      let dom_body_clone = dom_body_template.cloneNode(true)
      dom_body_clone.id = body.id
      dom_body_clone.getElementsByClassName("size")[0].value = body.mass
      dom_body_clone.getElementsByClassName("pos_x")[0].value = body.pos.x
      dom_body_clone.getElementsByClassName("pos_y")[0].value = body.pos.y
      dom_body_clone.getElementsByClassName("v_x")[0].value = body.v.x
      dom_body_clone.getElementsByClassName("v_y")[0].value = body.v.y
      dom_body_clone.getElementsByClassName("is_fixed")[0].checked = body.isFixed
      dom_body_clone.getElementsByClassName("is_restricted")[0].checked = body.isRestricted
      dom_body_clone.getElementsByClassName("body_color")[0].value = body.color
      dom_settings.appendChild(dom_body_clone)
    }
  }
}

function restart() {
  let back_canvas = document.getElementById("back_canvas");
  let front_canvas = document.getElementById("front_canvas");
  game, gui = null
  gui = new GUI()
  game = new Game(front_canvas, back_canvas)
  game.world.loadExperiment()
  game.renderer.resetCanvas()
  gui.loadExperiment(game.world)
  game.start()
}
