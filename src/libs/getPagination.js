export const getPagination = (page, size) => {
  const limit = size ? +size : 3; // limite de docs por página va a ser 3.
  const offset = page ? page * limit : 0;

  return { limit, offset };
}