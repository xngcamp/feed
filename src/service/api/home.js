import req from './utils';

// const parentPath = '/home';
const parentPath = '';

export function getList() {
  return req({
    path: `${parentPath}/list`,
  });
}

export function addFeedItem(text) {
  return req({
    path: `${parentPath}/add_with_get`,
    params: {
      txt: text,
    },
  });
}

export function deleteOne(id) {
  return req({
    path: `${parentPath}/delete_one`,
    params: {
      id,
    },
  });
}

export function updateOne({ id, text }) {
  return req({
    path: `${parentPath}/update_one`,
    params: {
      id,
      text,
    },
  });
}
