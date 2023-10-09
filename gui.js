document.addEventListener("DOMContentLoaded", function() {
    const sidebar1 = d3.select("#sb1");
    const sidebar2 = d3.select("#sb2");
    const toggleBtn1 = d3.select("#toggleBtn1");
    const toggleBtn2 = d3.select("#toggleBtn2");
    const elementsToToggle = d3.selectAll(".construct-container, .transparent-box, .construct, .accident-container, .transparent-box2, .accident, .position-container, .position-fix");
    elementsToToggle.classed("hidden", true);
    toggleBtn1.on("click", function() {
        elementsToToggle.classed("hidden", true);
        toggleSidebar(sidebar1);
        hideSidebar(sidebar2);
        elementsToToggle.classed("hidden", false);
        // elementsToToggle.classed("hidden", function(d, i) {
        //     return !d3.select(this).classed("hidden");
        //   });
      });

      toggleBtn2.on("click", function() {
        toggleSidebar(sidebar2);
        hideSidebar(sidebar1);
        elementsToToggle.classed("hidden", true);
      });
      function toggleSidebar(sidebar) {
        const currentRight = parseInt(sidebar.style("left"), 10);
        const newRight = currentRight === 0 ? -500 : 0;
        sidebar.style("left", newRight + "px");
      }
      function hideSidebar(sidebar) {
        sidebar.style("left", "-500px");
      }
});
