// Get slider elements
const sliders = {
    top: document.getElementById('top-slider'),
    topRight: document.getElementById('top-right-slider'),
    right: document.getElementById('right-slider'),
    bottomRight: document.getElementById('bottom-right-slider'),
    bottom: document.getElementById('bottom-slider'),
    bottomLeft: document.getElementById('bottom-left-slider'),
    left: document.getElementById('left-slider'),
    topLeft: document.getElementById('top-left-slider'),
    strokeWidth: document.getElementById('stroke-width-slider')
};

// Get color picker elements
const fillColorPicker = document.getElementById('fill-color-picker');
const strokeColorPicker = document.getElementById('stroke-color-picker');

// Get the SVG and path elements
const svgElement = document.getElementById('amoeba');
const amoebaPath = document.getElementById('amoeba-path');

// Update the amoeba shape based on slider values
function updateAmoeba() {
    const offsets = {
        top: parseInt(sliders.top.value),
        topRight: parseInt(sliders.topRight.value),
        right: parseInt(sliders.right.value),
        bottomRight: parseInt(sliders.bottomRight.value),
        bottom: parseInt(sliders.bottom.value),
        bottomLeft: parseInt(sliders.bottomLeft.value),
        left: parseInt(sliders.left.value),
        topLeft: parseInt(sliders.topLeft.value)
    };

    const centerX = 0;
    const centerY = 0;
    const radius = 200;

    // Calculate points at 45-degree intervals
    const angleIncrement = Math.PI / 4;
    let points = [];

    for (let i = 0; i < 8; i++) {
        const angle = angleIncrement * i;
        const offsetKeys = Object.keys(offsets);
        const offset = offsets[offsetKeys[i]];

        const x = centerX + (radius + offset) * Math.cos(angle);
        const y = centerY + (radius + offset) * Math.sin(angle);
        points.push({ x, y });
    }

    // Generate path data using smooth Bezier curves
    let pathData = `M ${points[0].x},${points[0].y} `;

    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const cp1x = p1.x + (p2.x - points[(i + 7) % points.length].x) / 6;
        const cp1y = p1.y + (p2.y - points[(i + 7) % points.length].y) / 6;
        const cp2x = p2.x - (points[(i + 2) % points.length].x - p1.x) / 6;
        const cp2y = p2.y - (points[(i + 2) % points.length].y - p1.y) / 6;

        pathData += `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y} `;
    }

    // Update SVG path
    console.log("Path Data:", pathData);
    amoebaPath.setAttribute('d', pathData);

    // Update amoeba fill color and stroke properties
    const fillColor = fillColorPicker.value;
    const strokeWidth = sliders.strokeWidth.value;
    const strokeColor = strokeColorPicker.value;

    console.log("Fill Color:", fillColor);
    console.log("Stroke Width:", strokeWidth);
    console.log("Stroke Color:", strokeColor);

    amoebaPath.setAttribute('fill', fillColor);
    amoebaPath.setAttribute('stroke-width', strokeWidth);
    amoebaPath.setAttribute('stroke', strokeColor);

    // Calculate bounding box and update viewBox
    let minX = points[0].x;
    let maxX = points[0].x;
    let minY = points[0].y;
    let maxY = points[0].y;

    for (let point of points) {
        if (point.x < minX) minX = point.x;
        if (point.x > maxX) maxX = point.x;
        if (point.y < minY) minY = point.y;
        if (point.y > maxY) maxY = point.y;
    }

    const padding = 50;
    minX -= padding;
    maxX += padding;
    minY -= padding;
    maxY += padding;

    svgElement.setAttribute('viewBox', `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
}


// Add event listeners to all sliders and color pickers
for (let key in sliders) {
    sliders[key].addEventListener('input', updateAmoeba);
}

fillColorPicker.addEventListener('input', updateAmoeba);
strokeColorPicker.addEventListener('input', updateAmoeba);

// Initial shape update
updateAmoeba();

// Randomize function
function randomizeSliders() {
    for (let key in sliders) {
        const randomValue = Math.floor(Math.random() * 401) - 200; // Random value between -200 and 200
        sliders[key].value = randomValue;
    }
    updateAmoeba();
}

// Download SVG function
function downloadSVG() {
    // Clone the SVG element
    const clonedSvgElement = svgElement.cloneNode(true);

    // Get the cloned path element
    const clonedPath = clonedSvgElement.querySelector('#amoeba-path');

   // Set styles directly as attributes
clonedPath.setAttribute('fill', fillColorPicker.value); // Use current value from the amoeba body color picker
clonedPath.setAttribute('stroke', strokeColorPicker.value); // Use current value from the stroke color picker
clonedPath.setAttribute('stroke-width', sliders.strokeWidth.value); // Use current value from the stroke width slider

    // Remove any style attributes to prevent conflicts
    clonedPath.removeAttribute('style');

    // Create a new SVG element to hold the cloned content
    const outerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    // Copy the viewBox attribute
    outerSVG.setAttribute('viewBox', svgElement.getAttribute('viewBox'));

    // Append the cloned path to the new SVG
    outerSVG.appendChild(clonedPath);

    // Serialize the SVG
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(outerSVG);

    // Add XML declaration if missing
    if (!source.match(/^<\?xml/)) {
        source = '<?xml version="1.0" standalone="no"?>\n' + source;
    }

    // Add namespaces if missing
    if (!source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    // Create a Blob and URL for the SVG
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    // Create a link and trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'amoeba_shape.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Release the object URL
    URL.revokeObjectURL(url);
}


// Get button elements and add event listeners
const randomizeButton = document.getElementById('randomize-button');
const downloadButton = document.getElementById('download-button');

randomizeButton.addEventListener('click', randomizeSliders);
downloadButton.addEventListener('click', downloadSVG);
