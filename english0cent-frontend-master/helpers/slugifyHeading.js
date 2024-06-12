const slugifyHeading = (text) => {
    return text
      .toString()                         // Convert to string
      .toLowerCase()                      // Convert to lowercase
      .replace(/\s+/g, '-')               // Replace spaces with -
      .replace(/[^\w\-]+/g, '')           // Remove all non-word characters
      .replace(/\-\-+/g, '-')             // Replace multiple - with single -
      .replace(/^-+/, '')                 // Trim - from start of text
      .replace(/-+$/, '');                // Trim - from end of text
  };
  
  export default slugifyHeading;
  