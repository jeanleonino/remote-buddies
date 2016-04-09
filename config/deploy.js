module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'remote-buddies',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
