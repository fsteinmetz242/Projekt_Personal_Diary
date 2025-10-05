function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setDataOnLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getDataFromLocalStorage, setDataOnLocalStorage };
