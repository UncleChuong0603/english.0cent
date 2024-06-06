const calculateReadingTime = (content) => {
    const wordCount = content.reduce((total, item) => {
      return total + item.children.reduce((childTotal, child) => childTotal + child.text.split(' ').length, 0);
    }, 0);
    const totalMinutes = Math.floor(wordCount / 200);
    const remainingSeconds = Math.round(((wordCount / 200) - totalMinutes) * 60);
    return `${totalMinutes}.${remainingSeconds} minutes to read`;
  };

  export default calculateReadingTime