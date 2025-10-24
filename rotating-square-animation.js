// Two rotating icosahedra inside #home (top middle and top right)
(() => {
  function loadThree() {
    return new Promise((resolve) => {
      if (window.THREE) return resolve(window.THREE);
      const s = document.createElement("script");
      s.src = "https://unpkg.com/three@0.160.0/build/three.min.js";
      s.onload = () => resolve(window.THREE);
      document.head.appendChild(s);
    });
  }

  // Create one icosahedron instance bound to a canvas
  function makeIcosahedron(
    canvas,
    {
      radius = 2.4,
      edgeColor = 0xffffff, // use hex for color
      edgeOpacity = 1.0, // use this for the "A" in RGBA
    } = {}
  ) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false, // solid background since we set clear color
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 1); // background black

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const geo = new THREE.IcosahedronGeometry(radius, 0);

    const solid = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.0, // keep it invisible so only lines show against black
      })
    );

    const edges = new THREE.EdgesGeometry(geo, 1);
    const wire = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({
        color: edgeColor, // white
        transparent: true,
        opacity: edgeOpacity, // 0.4 for rgba(255,255,255,0.4)
      })
    );

    const group = new THREE.Group();
    group.add(solid);
    group.add(wire);
    group.rotation.x = Math.PI * 0.18;
    group.rotation.y = Math.PI * 0.1;
    scene.add(group);

    // Fit renderer to the canvas element’s CSS size
    function resizeToCanvas() {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resizeToCanvas();

    // Animate
    let raf;
    function render() {
      raf = requestAnimationFrame(render);
      group.rotation.y += 0.006;
      group.rotation.x += 0.003;
      renderer.render(scene, camera);
    }
    render();

    // Resize observer keeps it crisp when CSS size or layout changes
    const ro = new ResizeObserver(resizeToCanvas);
    ro.observe(canvas);

    // Clean up if needed (not strictly required here)
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      edges.dispose();
      solid.material.dispose();
      wire.material.dispose();
    };
  }

  loadThree().then(() => {
    // Ensure IDs exist; your HTML already has #scene; we added #scene-small
    const big = document.getElementById("scene");
    const small = document.getElementById("scene-small");

    // Add a shared class for positioning if missing
    big.classList.add("poly");
    small.classList.add("poly");

    // Create both with rgba(255,255,255,0.4) effect => edgeColor: 0xffffff, edgeOpacity: 0.4
    makeIcosahedron(big, {
      radius: 3.4,
      edgeColor: 0xffffff,
      edgeOpacity: 0.4,
    });
    makeIcosahedron(small, {
      radius: 3.6,
      edgeColor: 0xffffff,
      edgeOpacity: 0.4,
    });
  });
})();
