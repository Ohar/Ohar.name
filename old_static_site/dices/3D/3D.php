<script type="text/javascript" src="/dices/3D/js/sylvester.js"></script>
<script type="text/javascript" src="/dices/3D/js/glUtils.js"></script>
<script type="text/javascript" src="/dices/3D/js/init.js"></script>
<script type="text/javascript" src="/dices/3D/js/functions.js"></script>

<!-- Fragment shader program -->

<script id="shader-fs" type="x-shader/x-fragment">
    varying lowp vec4 vColor;
    
  void main(void) {
    gl_FragColor = vColor;
  }
</script>

<!-- Vertex shader program -->

<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  
        varying lowp vec4 vColor;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
  }
</script>


<canvas id="3D_demo" width="640" height="480">
    Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
</canvas>