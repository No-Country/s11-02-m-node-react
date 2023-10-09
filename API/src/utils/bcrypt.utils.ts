import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/entities/user.entity';

export const encryptPassword = async (password: string): Promise<string> => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    return encryptedPassword;
  } catch (error) {
    throw new Error(error);
  }
};

export const isValidPassword = async (
  user: UserEntity,
  password: string,
): Promise<boolean> => {
  try {
    const isValidPassword = await bcrypt.compare(user.password, password);
    return isValidPassword;
  } catch (error) {
    throw new Error(error);
  }
};
