const userCreate = (id, username, passwd) => {
  return {
    id: id,
    username: username,
    passwd: passwd,
  };
}

module.exports = {
  userCreate,
}