    document.addEventListener("DOMContentLoaded", () => {
    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbotWindow = document.getElementById("chatbot-window");
    const resizeHandle = document.getElementById("resize-handle");
    const helpFrame = document.getElementById("help-frame");  
    const dragHandle = document.getElementById("drag-handle");
  
    chatbotBtn.addEventListener("click", () => {
      const isHidden = chatbotWindow.style.display === "none";
      chatbotWindow.style.display = isHidden ? "block" : "none";
  
      // Load iframe content with image when opening
      if (isHidden) {
        helpFrame.src = "iframe-content.html";
      }
    });
  
    // Resize logic
    let isResizing = false;
    let startX, startY, startWidth, startHeight, startLeft, startTop;
  
    resizeHandle.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isResizing = true;
      const rect = chatbotWindow.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startWidth = rect.width;
      startHeight = rect.height;
      startLeft = rect.left;
      startTop = rect.top;
      document.body.style.userSelect = "none";
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isResizing) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        chatbotWindow.style.width = `${startWidth - dx}px`;
        chatbotWindow.style.height = `${startHeight - dy}px`;
        chatbotWindow.style.left = `${startLeft + dx}px`;
        chatbotWindow.style.top = `${startTop + dy}px`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      isResizing = false;
      document.body.style.userSelect = "auto";
    });
    
    // Drag logic  
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
  
    dragHandle.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
  
      const rect = chatbotWindow.getBoundingClientRect();
      dragOffsetX = e.clientX - rect.left;
      dragOffsetY = e.clientY - rect.top;
  
      document.body.style.userSelect = "none";
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        chatbotWindow.style.left = `${e.clientX - dragOffsetX}px`;
        chatbotWindow.style.top = `${e.clientY - dragOffsetY}px`;
      }
    });
  });


  