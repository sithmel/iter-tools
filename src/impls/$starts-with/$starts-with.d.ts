import { $Promise } from '../../../generate/async.macro.cjs';

import { $Wrappable } from '../../types/$iterable';

declare function $startsWith(value: any): (iterable: $Wrappable<any>) => $Promise<boolean>;

declare function $startsWith(value: any, iterable: $Wrappable<any>): $Promise<boolean>;

export { $startsWith };
