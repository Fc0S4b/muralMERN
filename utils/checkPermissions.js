import { UnauthenticatedError } from '../errors/index.js';

const checkPermissions = (requestUSer, resourceUserId) => {
  if (requestUSer.userId === resourceUserId.toString()) return;
  throw new UnauthenticatedError('No autorizado para acceder a esta ruta');
};

export default checkPermissions;
