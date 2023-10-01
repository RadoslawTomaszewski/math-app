import { RegisterOptions } from 'react-hook-form';

export type RegisterFormOptions<T> = { [Property in keyof T]?: RegisterOptions };

