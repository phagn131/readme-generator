

// https://www.placecage.com/200/300
/**
 * Generates a placeholder img tag.
 * @param {Number} width 
 * @param {Number} height 
 * @returns Image Tag
 */
function renderPlaceholder(width, height){
    return `<img src="https://www.placecage.com/${width}/${height}" alt="placeholder image" />`;
  }
  
  /**
   * Generates a box with placeholder img
   * @param {*} param0 box definition with width, height and placeholder (true/false)
   * @returns 
   */
  function renderBox({width, height, placeholder}){
    let img = placeholder ? renderPlaceholder(width, height) : "";
    return `<div style="border: 1px solid black; width:${width}px; height:${height}px;">${img}</div>`;
  }
  
  module.exports = {
    renderPlaceholder,
    renderBox
  };