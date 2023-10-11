// import path from 'path-browserify';
// import url from 'assets/images/homepage-hero.jpg';


export const getImageUrl = (relativePath: string) => {
    console.log(relativePath);
    // TODO: How would you make something like this work?
    // place-my-order-assets/images/4-thumbnail.jpg
    return relativePath.split('node_modules/').at(-1);
    // return `${relativePath.split('node_modules/').at(-1)}`;
};
