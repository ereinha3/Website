useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const circle = document.getElementById('eyelid');

    // Check for Mobile
    if ((/android/i.test(userAgent)) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) || (/webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
      if (circle) {
        circle.remove();
      }
    }

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    let currentScrollX = 0;
    let currentScrollY = 0;
    const circleRadius = 24;

    // Update the mouse position
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX + window.scrollX;
      mouseY = e.clientY + window.scrollY;
    });

    // Update the circle position on scroll
    document.addEventListener('scroll', () => {
      mouseX = mouseX + window.scrollX - currentScrollX;
      mouseY = mouseY + window.scrollY - currentScrollY;
      currentScrollX = window.scrollX;
      currentScrollY = window.scrollY;
    });

    // Update the circle position with a delay
    const updateCirclePosition = () => {
      const delay = 1; // Change this value to adjust the delay

      // Calculate the new position with some easing/delay
      circleX += (mouseX - circleX) * delay;
      circleY += (mouseY - circleY) * delay;

      // Apply the new position to the circle
      if (circle) {
        circle.style.left = `${circleX - circleRadius}px`;
        circle.style.top = `${circleY - circleRadius}px`;
      }
      // Call the function again on the next frame
      requestAnimationFrame(updateCirclePosition);
    };

    // Start the animation
    updateCirclePosition();
  }, []);
