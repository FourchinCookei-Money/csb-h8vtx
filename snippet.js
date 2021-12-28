<model-viewer bounds="tight" src="Final Dino1.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="7.2" exposure="1.47" shadow-softness="0.63" environment-image="whipple_creek_regional_park_04_1k.hdr" skybox-image="whipple_creek_regional_park_04_1k.hdr">

    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
    </div>
</model-viewer>
