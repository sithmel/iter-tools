import { variadicCurryWithValidation } from './curry';

export function* empty() {}

export function isIterable(i) {
  return Boolean(i != null && i[Symbol.iterator]);
}

export function ensureIterable(i) {
  if (i == null) {
    return empty();
  } else if (!isIterable(i)) {
    if (typeof i.next === 'function') {
      throw new TypeError(
        'Iterators are not supported arguments to iter-tools. It must be an iterable. For example: { [Symbol.iterator] : () => currentArgument }',
      );
    }
    throw new TypeError('The argument is not an iterable or null');
  }
  return i;
}

export function isValidIterableArgument(i) {
  return i == null || isIterable(i);
}

export function BaseResultIterable(fn, args, iterablesArg) {
  this._fn = fn;
  this._args = args;
  this._iterablesArg = iterablesArg;
  this._staticIterator = null;
}

Object.assign(BaseResultIterable.prototype, {
  __iterate() {
    return this._fn(this._iterablesArg, ...this._args);
  },

  throw() {
    this._staticIterator = this._staticIterator || this.__iterate();
    return this._staticIterator.throw();
  },

  next() {
    this._staticIterator = this._staticIterator || this.__iterate();
    return this._staticIterator.next();
  },

  return(...args) {
    if (typeof this._staticIterator.return === 'function') {
      this._staticIterator.return(...args);
    }
  },
});

export function ResultIterable(...args) {
  BaseResultIterable.apply(this, args);
}

ResultIterable.prototype = Object.assign(Object.create(BaseResultIterable.prototype), {
  constructor: ResultIterable,
  [Symbol.iterator]() {
    return this.__iterate();
  },
});

function SimpleResultIterable(...args) {
  ResultIterable.apply(this, args);
}

SimpleResultIterable.prototype = Object.assign(Object.create(ResultIterable.prototype), {
  __iterate() {
    return this._fn(...this._args);
  },
});

function makeFunctionConfig(fn, fnConfig = {}) {
  const { validateArgs, variadic, reduces, optionalArgsAtEnd, minArgs, maxArgs } = fnConfig;

  return {
    fn,
    validateArgs: validateArgs || (_ => {}),
    variadic: !!variadic,
    reduces: !!reduces,
    optionalArgsAtEnd: !!optionalArgsAtEnd,
    minArgs: minArgs === undefined ? fn.length - 1 : minArgs,
    maxArgs: maxArgs === undefined ? fn.length - 1 : maxArgs,
    isIterable: isValidIterableArgument,
    iterableType: 'iterable',
    applyOnIterableArgs: ensureIterable,
    IterableClass: ResultIterable,
  };
}

export function wrapWithResultIterable(fn, { validateArgs = _ => _ } = {}) {
  return (...args) => {
    validateArgs(args);
    return new SimpleResultIterable(fn, args);
  };
}

export const iterableCurry = (fn, config) => {
  return variadicCurryWithValidation(makeFunctionConfig(fn, config));
};
