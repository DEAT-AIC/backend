
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Anak
 * 
 */
export type Anak = $Result.DefaultSelection<Prisma.$AnakPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Pertanyaan
 * 
 */
export type Pertanyaan = $Result.DefaultSelection<Prisma.$PertanyaanPayload>
/**
 * Model Kata
 * 
 */
export type Kata = $Result.DefaultSelection<Prisma.$KataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JenisKelamin: {
  PRIA: 'PRIA',
  PEREMPUAN: 'PEREMPUAN'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]

}

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.anak`: Exposes CRUD operations for the **Anak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anaks
    * const anaks = await prisma.anak.findMany()
    * ```
    */
  get anak(): Prisma.AnakDelegate<ExtArgs>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs>;

  /**
   * `prisma.pertanyaan`: Exposes CRUD operations for the **Pertanyaan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pertanyaans
    * const pertanyaans = await prisma.pertanyaan.findMany()
    * ```
    */
  get pertanyaan(): Prisma.PertanyaanDelegate<ExtArgs>;

  /**
   * `prisma.kata`: Exposes CRUD operations for the **Kata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Katas
    * const katas = await prisma.kata.findMany()
    * ```
    */
  get kata(): Prisma.KataDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Anak: 'Anak',
    Test: 'Test',
    Pertanyaan: 'Pertanyaan',
    Kata: 'Kata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'anak' | 'test' | 'pertanyaan' | 'kata'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Anak: {
        payload: Prisma.$AnakPayload<ExtArgs>
        fields: Prisma.AnakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnakFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnakFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>
          }
          findFirst: {
            args: Prisma.AnakFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnakFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>
          }
          findMany: {
            args: Prisma.AnakFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>[]
          }
          create: {
            args: Prisma.AnakCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>
          }
          createMany: {
            args: Prisma.AnakCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnakDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>
          }
          update: {
            args: Prisma.AnakUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>
          }
          deleteMany: {
            args: Prisma.AnakDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnakUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnakUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnakPayload>
          }
          aggregate: {
            args: Prisma.AnakAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnak>
          }
          groupBy: {
            args: Prisma.AnakGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnakGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnakCountArgs<ExtArgs>,
            result: $Utils.Optional<AnakCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>,
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Pertanyaan: {
        payload: Prisma.$PertanyaanPayload<ExtArgs>
        fields: Prisma.PertanyaanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PertanyaanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PertanyaanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          findFirst: {
            args: Prisma.PertanyaanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PertanyaanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          findMany: {
            args: Prisma.PertanyaanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>[]
          }
          create: {
            args: Prisma.PertanyaanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          createMany: {
            args: Prisma.PertanyaanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PertanyaanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          update: {
            args: Prisma.PertanyaanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          deleteMany: {
            args: Prisma.PertanyaanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PertanyaanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PertanyaanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PertanyaanPayload>
          }
          aggregate: {
            args: Prisma.PertanyaanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePertanyaan>
          }
          groupBy: {
            args: Prisma.PertanyaanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PertanyaanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PertanyaanCountArgs<ExtArgs>,
            result: $Utils.Optional<PertanyaanCountAggregateOutputType> | number
          }
        }
      }
      Kata: {
        payload: Prisma.$KataPayload<ExtArgs>
        fields: Prisma.KataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>
          }
          findFirst: {
            args: Prisma.KataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>
          }
          findMany: {
            args: Prisma.KataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>[]
          }
          create: {
            args: Prisma.KataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>
          }
          createMany: {
            args: Prisma.KataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>
          }
          update: {
            args: Prisma.KataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>
          }
          deleteMany: {
            args: Prisma.KataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KataPayload>
          }
          aggregate: {
            args: Prisma.KataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKata>
          }
          groupBy: {
            args: Prisma.KataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KataGroupByOutputType>[]
          }
          count: {
            args: Prisma.KataCountArgs<ExtArgs>,
            result: $Utils.Optional<KataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    anak: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    anak?: boolean | UserCountOutputTypeCountAnakArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnakArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnakWhereInput
  }



  /**
   * Count Type AnakCountOutputType
   */

  export type AnakCountOutputType = {
    test: number
  }

  export type AnakCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    test?: boolean | AnakCountOutputTypeCountTestArgs
  }

  // Custom InputTypes

  /**
   * AnakCountOutputType without action
   */
  export type AnakCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnakCountOutputType
     */
    select?: AnakCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AnakCountOutputType without action
   */
  export type AnakCountOutputTypeCountTestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }



  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    pertanyaan: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pertanyaan?: boolean | TestCountOutputTypeCountPertanyaanArgs
  }

  // Custom InputTypes

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountPertanyaanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PertanyaanWhereInput
  }



  /**
   * Count Type KataCountOutputType
   */

  export type KataCountOutputType = {
    pertanyaan: number
  }

  export type KataCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pertanyaan?: boolean | KataCountOutputTypeCountPertanyaanArgs
  }

  // Custom InputTypes

  /**
   * KataCountOutputType without action
   */
  export type KataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KataCountOutputType
     */
    select?: KataCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * KataCountOutputType without action
   */
  export type KataCountOutputTypeCountPertanyaanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PertanyaanWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uuid: string | null
    email: string | null
    nama: string | null
    phone: string | null
    address: string | null
    emailValid: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    uuid: string | null
    email: string | null
    nama: string | null
    phone: string | null
    address: string | null
    emailValid: boolean | null
  }

  export type UserCountAggregateOutputType = {
    uuid: number
    email: number
    nama: number
    phone: number
    address: number
    emailValid: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uuid?: true
    email?: true
    nama?: true
    phone?: true
    address?: true
    emailValid?: true
  }

  export type UserMaxAggregateInputType = {
    uuid?: true
    email?: true
    nama?: true
    phone?: true
    address?: true
    emailValid?: true
  }

  export type UserCountAggregateInputType = {
    uuid?: true
    email?: true
    nama?: true
    phone?: true
    address?: true
    emailValid?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uuid: string
    email: string
    nama: string
    phone: string | null
    address: string | null
    emailValid: boolean | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    email?: boolean
    nama?: boolean
    phone?: boolean
    address?: boolean
    emailValid?: boolean
    anak?: boolean | User$anakArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uuid?: boolean
    email?: boolean
    nama?: boolean
    phone?: boolean
    address?: boolean
    emailValid?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    anak?: boolean | User$anakArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      anak: Prisma.$AnakPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      uuid: string
      email: string
      nama: string
      phone: string | null
      address: string | null
      emailValid: boolean | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userWithUuidOnly = await prisma.user.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anak<T extends User$anakArgs<ExtArgs> = {}>(args?: Subset<T, User$anakArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly uuid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly emailValid: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.anak
   */
  export type User$anakArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    where?: AnakWhereInput
    orderBy?: AnakOrderByWithRelationInput | AnakOrderByWithRelationInput[]
    cursor?: AnakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnakScalarFieldEnum | AnakScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Anak
   */

  export type AggregateAnak = {
    _count: AnakCountAggregateOutputType | null
    _min: AnakMinAggregateOutputType | null
    _max: AnakMaxAggregateOutputType | null
  }

  export type AnakMinAggregateOutputType = {
    uuid: string | null
    idUser: string | null
    nama: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
  }

  export type AnakMaxAggregateOutputType = {
    uuid: string | null
    idUser: string | null
    nama: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
  }

  export type AnakCountAggregateOutputType = {
    uuid: number
    idUser: number
    nama: number
    tanggalLahir: number
    jenisKelamin: number
    _all: number
  }


  export type AnakMinAggregateInputType = {
    uuid?: true
    idUser?: true
    nama?: true
    tanggalLahir?: true
    jenisKelamin?: true
  }

  export type AnakMaxAggregateInputType = {
    uuid?: true
    idUser?: true
    nama?: true
    tanggalLahir?: true
    jenisKelamin?: true
  }

  export type AnakCountAggregateInputType = {
    uuid?: true
    idUser?: true
    nama?: true
    tanggalLahir?: true
    jenisKelamin?: true
    _all?: true
  }

  export type AnakAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anak to aggregate.
     */
    where?: AnakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anaks to fetch.
     */
    orderBy?: AnakOrderByWithRelationInput | AnakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anaks
    **/
    _count?: true | AnakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnakMaxAggregateInputType
  }

  export type GetAnakAggregateType<T extends AnakAggregateArgs> = {
        [P in keyof T & keyof AggregateAnak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnak[P]>
      : GetScalarType<T[P], AggregateAnak[P]>
  }




  export type AnakGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnakWhereInput
    orderBy?: AnakOrderByWithAggregationInput | AnakOrderByWithAggregationInput[]
    by: AnakScalarFieldEnum[] | AnakScalarFieldEnum
    having?: AnakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnakCountAggregateInputType | true
    _min?: AnakMinAggregateInputType
    _max?: AnakMaxAggregateInputType
  }

  export type AnakGroupByOutputType = {
    uuid: string
    idUser: string
    nama: string
    tanggalLahir: Date
    jenisKelamin: $Enums.JenisKelamin
    _count: AnakCountAggregateOutputType | null
    _min: AnakMinAggregateOutputType | null
    _max: AnakMaxAggregateOutputType | null
  }

  type GetAnakGroupByPayload<T extends AnakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnakGroupByOutputType[P]>
            : GetScalarType<T[P], AnakGroupByOutputType[P]>
        }
      >
    >


  export type AnakSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    idUser?: boolean
    nama?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | Anak$testArgs<ExtArgs>
    _count?: boolean | AnakCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anak"]>

  export type AnakSelectScalar = {
    uuid?: boolean
    idUser?: boolean
    nama?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
  }

  export type AnakInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | Anak$testArgs<ExtArgs>
    _count?: boolean | AnakCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AnakPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Anak"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      test: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      uuid: string
      idUser: string
      nama: string
      tanggalLahir: Date
      jenisKelamin: $Enums.JenisKelamin
    }, ExtArgs["result"]["anak"]>
    composites: {}
  }


  type AnakGetPayload<S extends boolean | null | undefined | AnakDefaultArgs> = $Result.GetResult<Prisma.$AnakPayload, S>

  type AnakCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AnakFindManyArgs, 'select' | 'include'> & {
      select?: AnakCountAggregateInputType | true
    }

  export interface AnakDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anak'], meta: { name: 'Anak' } }
    /**
     * Find zero or one Anak that matches the filter.
     * @param {AnakFindUniqueArgs} args - Arguments to find a Anak
     * @example
     * // Get one Anak
     * const anak = await prisma.anak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnakFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnakFindUniqueArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Anak that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnakFindUniqueOrThrowArgs} args - Arguments to find a Anak
     * @example
     * // Get one Anak
     * const anak = await prisma.anak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnakFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnakFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Anak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakFindFirstArgs} args - Arguments to find a Anak
     * @example
     * // Get one Anak
     * const anak = await prisma.anak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnakFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnakFindFirstArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Anak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakFindFirstOrThrowArgs} args - Arguments to find a Anak
     * @example
     * // Get one Anak
     * const anak = await prisma.anak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnakFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnakFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Anaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anaks
     * const anaks = await prisma.anak.findMany()
     * 
     * // Get first 10 Anaks
     * const anaks = await prisma.anak.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const anakWithUuidOnly = await prisma.anak.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends AnakFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnakFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Anak.
     * @param {AnakCreateArgs} args - Arguments to create a Anak.
     * @example
     * // Create one Anak
     * const Anak = await prisma.anak.create({
     *   data: {
     *     // ... data to create a Anak
     *   }
     * })
     * 
    **/
    create<T extends AnakCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnakCreateArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Anaks.
     *     @param {AnakCreateManyArgs} args - Arguments to create many Anaks.
     *     @example
     *     // Create many Anaks
     *     const anak = await prisma.anak.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnakCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnakCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Anak.
     * @param {AnakDeleteArgs} args - Arguments to delete one Anak.
     * @example
     * // Delete one Anak
     * const Anak = await prisma.anak.delete({
     *   where: {
     *     // ... filter to delete one Anak
     *   }
     * })
     * 
    **/
    delete<T extends AnakDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnakDeleteArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Anak.
     * @param {AnakUpdateArgs} args - Arguments to update one Anak.
     * @example
     * // Update one Anak
     * const anak = await prisma.anak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnakUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnakUpdateArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Anaks.
     * @param {AnakDeleteManyArgs} args - Arguments to filter Anaks to delete.
     * @example
     * // Delete a few Anaks
     * const { count } = await prisma.anak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnakDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnakDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anaks
     * const anak = await prisma.anak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnakUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnakUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Anak.
     * @param {AnakUpsertArgs} args - Arguments to update or create a Anak.
     * @example
     * // Update or create a Anak
     * const anak = await prisma.anak.upsert({
     *   create: {
     *     // ... data to create a Anak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anak we want to update
     *   }
     * })
    **/
    upsert<T extends AnakUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnakUpsertArgs<ExtArgs>>
    ): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Anaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakCountArgs} args - Arguments to filter Anaks to count.
     * @example
     * // Count the number of Anaks
     * const count = await prisma.anak.count({
     *   where: {
     *     // ... the filter for the Anaks we want to count
     *   }
     * })
    **/
    count<T extends AnakCountArgs>(
      args?: Subset<T, AnakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnakAggregateArgs>(args: Subset<T, AnakAggregateArgs>): Prisma.PrismaPromise<GetAnakAggregateType<T>>

    /**
     * Group by Anak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnakGroupByArgs['orderBy'] }
        : { orderBy?: AnakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anak model
   */
  readonly fields: AnakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnakClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    test<T extends Anak$testArgs<ExtArgs> = {}>(args?: Subset<T, Anak$testArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Anak model
   */ 
  interface AnakFieldRefs {
    readonly uuid: FieldRef<"Anak", 'String'>
    readonly idUser: FieldRef<"Anak", 'String'>
    readonly nama: FieldRef<"Anak", 'String'>
    readonly tanggalLahir: FieldRef<"Anak", 'DateTime'>
    readonly jenisKelamin: FieldRef<"Anak", 'JenisKelamin'>
  }
    

  // Custom InputTypes

  /**
   * Anak findUnique
   */
  export type AnakFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * Filter, which Anak to fetch.
     */
    where: AnakWhereUniqueInput
  }


  /**
   * Anak findUniqueOrThrow
   */
  export type AnakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * Filter, which Anak to fetch.
     */
    where: AnakWhereUniqueInput
  }


  /**
   * Anak findFirst
   */
  export type AnakFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * Filter, which Anak to fetch.
     */
    where?: AnakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anaks to fetch.
     */
    orderBy?: AnakOrderByWithRelationInput | AnakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anaks.
     */
    cursor?: AnakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anaks.
     */
    distinct?: AnakScalarFieldEnum | AnakScalarFieldEnum[]
  }


  /**
   * Anak findFirstOrThrow
   */
  export type AnakFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * Filter, which Anak to fetch.
     */
    where?: AnakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anaks to fetch.
     */
    orderBy?: AnakOrderByWithRelationInput | AnakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anaks.
     */
    cursor?: AnakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anaks.
     */
    distinct?: AnakScalarFieldEnum | AnakScalarFieldEnum[]
  }


  /**
   * Anak findMany
   */
  export type AnakFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * Filter, which Anaks to fetch.
     */
    where?: AnakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anaks to fetch.
     */
    orderBy?: AnakOrderByWithRelationInput | AnakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anaks.
     */
    cursor?: AnakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anaks.
     */
    skip?: number
    distinct?: AnakScalarFieldEnum | AnakScalarFieldEnum[]
  }


  /**
   * Anak create
   */
  export type AnakCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * The data needed to create a Anak.
     */
    data: XOR<AnakCreateInput, AnakUncheckedCreateInput>
  }


  /**
   * Anak createMany
   */
  export type AnakCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anaks.
     */
    data: AnakCreateManyInput | AnakCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Anak update
   */
  export type AnakUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * The data needed to update a Anak.
     */
    data: XOR<AnakUpdateInput, AnakUncheckedUpdateInput>
    /**
     * Choose, which Anak to update.
     */
    where: AnakWhereUniqueInput
  }


  /**
   * Anak updateMany
   */
  export type AnakUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anaks.
     */
    data: XOR<AnakUpdateManyMutationInput, AnakUncheckedUpdateManyInput>
    /**
     * Filter which Anaks to update
     */
    where?: AnakWhereInput
  }


  /**
   * Anak upsert
   */
  export type AnakUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * The filter to search for the Anak to update in case it exists.
     */
    where: AnakWhereUniqueInput
    /**
     * In case the Anak found by the `where` argument doesn't exist, create a new Anak with this data.
     */
    create: XOR<AnakCreateInput, AnakUncheckedCreateInput>
    /**
     * In case the Anak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnakUpdateInput, AnakUncheckedUpdateInput>
  }


  /**
   * Anak delete
   */
  export type AnakDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
    /**
     * Filter which Anak to delete.
     */
    where: AnakWhereUniqueInput
  }


  /**
   * Anak deleteMany
   */
  export type AnakDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anaks to delete
     */
    where?: AnakWhereInput
  }


  /**
   * Anak.test
   */
  export type Anak$testArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Anak without action
   */
  export type AnakDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anak
     */
    select?: AnakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnakInclude<ExtArgs> | null
  }



  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestMinAggregateOutputType = {
    uuid: string | null
    idAnak: string | null
    timestamp: Date | null
    hasil: string | null
    rekomendasi: string | null
  }

  export type TestMaxAggregateOutputType = {
    uuid: string | null
    idAnak: string | null
    timestamp: Date | null
    hasil: string | null
    rekomendasi: string | null
  }

  export type TestCountAggregateOutputType = {
    uuid: number
    idAnak: number
    timestamp: number
    hasil: number
    rekomendasi: number
    _all: number
  }


  export type TestMinAggregateInputType = {
    uuid?: true
    idAnak?: true
    timestamp?: true
    hasil?: true
    rekomendasi?: true
  }

  export type TestMaxAggregateInputType = {
    uuid?: true
    idAnak?: true
    timestamp?: true
    hasil?: true
    rekomendasi?: true
  }

  export type TestCountAggregateInputType = {
    uuid?: true
    idAnak?: true
    timestamp?: true
    hasil?: true
    rekomendasi?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    uuid: string
    idAnak: string
    timestamp: Date
    hasil: string | null
    rekomendasi: string | null
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    idAnak?: boolean
    timestamp?: boolean
    hasil?: boolean
    rekomendasi?: boolean
    anak?: boolean | AnakDefaultArgs<ExtArgs>
    pertanyaan?: boolean | Test$pertanyaanArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    uuid?: boolean
    idAnak?: boolean
    timestamp?: boolean
    hasil?: boolean
    rekomendasi?: boolean
  }

  export type TestInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    anak?: boolean | AnakDefaultArgs<ExtArgs>
    pertanyaan?: boolean | Test$pertanyaanArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      anak: Prisma.$AnakPayload<ExtArgs>
      pertanyaan: Prisma.$PertanyaanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      uuid: string
      idAnak: string
      timestamp: Date
      hasil: string | null
      rekomendasi: string | null
    }, ExtArgs["result"]["test"]>
    composites: {}
  }


  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TestFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const testWithUuidOnly = await prisma.test.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TestCreateArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tests.
     *     @param {TestCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TestDeleteArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpsertArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anak<T extends AnakDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnakDefaultArgs<ExtArgs>>): Prisma__AnakClient<$Result.GetResult<Prisma.$AnakPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    pertanyaan<T extends Test$pertanyaanArgs<ExtArgs> = {}>(args?: Subset<T, Test$pertanyaanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Test model
   */ 
  interface TestFieldRefs {
    readonly uuid: FieldRef<"Test", 'String'>
    readonly idAnak: FieldRef<"Test", 'String'>
    readonly timestamp: FieldRef<"Test", 'DateTime'>
    readonly hasil: FieldRef<"Test", 'String'>
    readonly rekomendasi: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }


  /**
   * Test.pertanyaan
   */
  export type Test$pertanyaanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    where?: PertanyaanWhereInput
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    cursor?: PertanyaanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }


  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
  }



  /**
   * Model Pertanyaan
   */

  export type AggregatePertanyaan = {
    _count: PertanyaanCountAggregateOutputType | null
    _min: PertanyaanMinAggregateOutputType | null
    _max: PertanyaanMaxAggregateOutputType | null
  }

  export type PertanyaanMinAggregateOutputType = {
    uuid: string | null
    idTest: string | null
    kataStr: string | null
    jawaban: string | null
    kebenaran: boolean | null
  }

  export type PertanyaanMaxAggregateOutputType = {
    uuid: string | null
    idTest: string | null
    kataStr: string | null
    jawaban: string | null
    kebenaran: boolean | null
  }

  export type PertanyaanCountAggregateOutputType = {
    uuid: number
    idTest: number
    kataStr: number
    jawaban: number
    kebenaran: number
    _all: number
  }


  export type PertanyaanMinAggregateInputType = {
    uuid?: true
    idTest?: true
    kataStr?: true
    jawaban?: true
    kebenaran?: true
  }

  export type PertanyaanMaxAggregateInputType = {
    uuid?: true
    idTest?: true
    kataStr?: true
    jawaban?: true
    kebenaran?: true
  }

  export type PertanyaanCountAggregateInputType = {
    uuid?: true
    idTest?: true
    kataStr?: true
    jawaban?: true
    kebenaran?: true
    _all?: true
  }

  export type PertanyaanAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pertanyaan to aggregate.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pertanyaans
    **/
    _count?: true | PertanyaanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PertanyaanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PertanyaanMaxAggregateInputType
  }

  export type GetPertanyaanAggregateType<T extends PertanyaanAggregateArgs> = {
        [P in keyof T & keyof AggregatePertanyaan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePertanyaan[P]>
      : GetScalarType<T[P], AggregatePertanyaan[P]>
  }




  export type PertanyaanGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PertanyaanWhereInput
    orderBy?: PertanyaanOrderByWithAggregationInput | PertanyaanOrderByWithAggregationInput[]
    by: PertanyaanScalarFieldEnum[] | PertanyaanScalarFieldEnum
    having?: PertanyaanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PertanyaanCountAggregateInputType | true
    _min?: PertanyaanMinAggregateInputType
    _max?: PertanyaanMaxAggregateInputType
  }

  export type PertanyaanGroupByOutputType = {
    uuid: string
    idTest: string
    kataStr: string
    jawaban: string | null
    kebenaran: boolean
    _count: PertanyaanCountAggregateOutputType | null
    _min: PertanyaanMinAggregateOutputType | null
    _max: PertanyaanMaxAggregateOutputType | null
  }

  type GetPertanyaanGroupByPayload<T extends PertanyaanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PertanyaanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PertanyaanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PertanyaanGroupByOutputType[P]>
            : GetScalarType<T[P], PertanyaanGroupByOutputType[P]>
        }
      >
    >


  export type PertanyaanSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    idTest?: boolean
    kataStr?: boolean
    jawaban?: boolean
    kebenaran?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    kata?: boolean | KataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertanyaan"]>

  export type PertanyaanSelectScalar = {
    uuid?: boolean
    idTest?: boolean
    kataStr?: boolean
    jawaban?: boolean
    kebenaran?: boolean
  }

  export type PertanyaanInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    kata?: boolean | KataDefaultArgs<ExtArgs>
  }


  export type $PertanyaanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Pertanyaan"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      kata: Prisma.$KataPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      uuid: string
      idTest: string
      kataStr: string
      jawaban: string | null
      kebenaran: boolean
    }, ExtArgs["result"]["pertanyaan"]>
    composites: {}
  }


  type PertanyaanGetPayload<S extends boolean | null | undefined | PertanyaanDefaultArgs> = $Result.GetResult<Prisma.$PertanyaanPayload, S>

  type PertanyaanCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PertanyaanFindManyArgs, 'select' | 'include'> & {
      select?: PertanyaanCountAggregateInputType | true
    }

  export interface PertanyaanDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pertanyaan'], meta: { name: 'Pertanyaan' } }
    /**
     * Find zero or one Pertanyaan that matches the filter.
     * @param {PertanyaanFindUniqueArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PertanyaanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PertanyaanFindUniqueArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pertanyaan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PertanyaanFindUniqueOrThrowArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PertanyaanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PertanyaanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pertanyaan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanFindFirstArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PertanyaanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PertanyaanFindFirstArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pertanyaan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanFindFirstOrThrowArgs} args - Arguments to find a Pertanyaan
     * @example
     * // Get one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PertanyaanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PertanyaanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pertanyaans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pertanyaans
     * const pertanyaans = await prisma.pertanyaan.findMany()
     * 
     * // Get first 10 Pertanyaans
     * const pertanyaans = await prisma.pertanyaan.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const pertanyaanWithUuidOnly = await prisma.pertanyaan.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends PertanyaanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PertanyaanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pertanyaan.
     * @param {PertanyaanCreateArgs} args - Arguments to create a Pertanyaan.
     * @example
     * // Create one Pertanyaan
     * const Pertanyaan = await prisma.pertanyaan.create({
     *   data: {
     *     // ... data to create a Pertanyaan
     *   }
     * })
     * 
    **/
    create<T extends PertanyaanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PertanyaanCreateArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pertanyaans.
     *     @param {PertanyaanCreateManyArgs} args - Arguments to create many Pertanyaans.
     *     @example
     *     // Create many Pertanyaans
     *     const pertanyaan = await prisma.pertanyaan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PertanyaanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PertanyaanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pertanyaan.
     * @param {PertanyaanDeleteArgs} args - Arguments to delete one Pertanyaan.
     * @example
     * // Delete one Pertanyaan
     * const Pertanyaan = await prisma.pertanyaan.delete({
     *   where: {
     *     // ... filter to delete one Pertanyaan
     *   }
     * })
     * 
    **/
    delete<T extends PertanyaanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PertanyaanDeleteArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pertanyaan.
     * @param {PertanyaanUpdateArgs} args - Arguments to update one Pertanyaan.
     * @example
     * // Update one Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PertanyaanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PertanyaanUpdateArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pertanyaans.
     * @param {PertanyaanDeleteManyArgs} args - Arguments to filter Pertanyaans to delete.
     * @example
     * // Delete a few Pertanyaans
     * const { count } = await prisma.pertanyaan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PertanyaanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PertanyaanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pertanyaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pertanyaans
     * const pertanyaan = await prisma.pertanyaan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PertanyaanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PertanyaanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pertanyaan.
     * @param {PertanyaanUpsertArgs} args - Arguments to update or create a Pertanyaan.
     * @example
     * // Update or create a Pertanyaan
     * const pertanyaan = await prisma.pertanyaan.upsert({
     *   create: {
     *     // ... data to create a Pertanyaan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pertanyaan we want to update
     *   }
     * })
    **/
    upsert<T extends PertanyaanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PertanyaanUpsertArgs<ExtArgs>>
    ): Prisma__PertanyaanClient<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pertanyaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanCountArgs} args - Arguments to filter Pertanyaans to count.
     * @example
     * // Count the number of Pertanyaans
     * const count = await prisma.pertanyaan.count({
     *   where: {
     *     // ... the filter for the Pertanyaans we want to count
     *   }
     * })
    **/
    count<T extends PertanyaanCountArgs>(
      args?: Subset<T, PertanyaanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PertanyaanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pertanyaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PertanyaanAggregateArgs>(args: Subset<T, PertanyaanAggregateArgs>): Prisma.PrismaPromise<GetPertanyaanAggregateType<T>>

    /**
     * Group by Pertanyaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertanyaanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PertanyaanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PertanyaanGroupByArgs['orderBy'] }
        : { orderBy?: PertanyaanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PertanyaanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPertanyaanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pertanyaan model
   */
  readonly fields: PertanyaanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pertanyaan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PertanyaanClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    kata<T extends KataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KataDefaultArgs<ExtArgs>>): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pertanyaan model
   */ 
  interface PertanyaanFieldRefs {
    readonly uuid: FieldRef<"Pertanyaan", 'String'>
    readonly idTest: FieldRef<"Pertanyaan", 'String'>
    readonly kataStr: FieldRef<"Pertanyaan", 'String'>
    readonly jawaban: FieldRef<"Pertanyaan", 'String'>
    readonly kebenaran: FieldRef<"Pertanyaan", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Pertanyaan findUnique
   */
  export type PertanyaanFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where: PertanyaanWhereUniqueInput
  }


  /**
   * Pertanyaan findUniqueOrThrow
   */
  export type PertanyaanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where: PertanyaanWhereUniqueInput
  }


  /**
   * Pertanyaan findFirst
   */
  export type PertanyaanFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pertanyaans.
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pertanyaans.
     */
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }


  /**
   * Pertanyaan findFirstOrThrow
   */
  export type PertanyaanFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * Filter, which Pertanyaan to fetch.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pertanyaans.
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pertanyaans.
     */
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }


  /**
   * Pertanyaan findMany
   */
  export type PertanyaanFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * Filter, which Pertanyaans to fetch.
     */
    where?: PertanyaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertanyaans to fetch.
     */
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pertanyaans.
     */
    cursor?: PertanyaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertanyaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertanyaans.
     */
    skip?: number
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }


  /**
   * Pertanyaan create
   */
  export type PertanyaanCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * The data needed to create a Pertanyaan.
     */
    data: XOR<PertanyaanCreateInput, PertanyaanUncheckedCreateInput>
  }


  /**
   * Pertanyaan createMany
   */
  export type PertanyaanCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pertanyaans.
     */
    data: PertanyaanCreateManyInput | PertanyaanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pertanyaan update
   */
  export type PertanyaanUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * The data needed to update a Pertanyaan.
     */
    data: XOR<PertanyaanUpdateInput, PertanyaanUncheckedUpdateInput>
    /**
     * Choose, which Pertanyaan to update.
     */
    where: PertanyaanWhereUniqueInput
  }


  /**
   * Pertanyaan updateMany
   */
  export type PertanyaanUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pertanyaans.
     */
    data: XOR<PertanyaanUpdateManyMutationInput, PertanyaanUncheckedUpdateManyInput>
    /**
     * Filter which Pertanyaans to update
     */
    where?: PertanyaanWhereInput
  }


  /**
   * Pertanyaan upsert
   */
  export type PertanyaanUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * The filter to search for the Pertanyaan to update in case it exists.
     */
    where: PertanyaanWhereUniqueInput
    /**
     * In case the Pertanyaan found by the `where` argument doesn't exist, create a new Pertanyaan with this data.
     */
    create: XOR<PertanyaanCreateInput, PertanyaanUncheckedCreateInput>
    /**
     * In case the Pertanyaan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PertanyaanUpdateInput, PertanyaanUncheckedUpdateInput>
  }


  /**
   * Pertanyaan delete
   */
  export type PertanyaanDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    /**
     * Filter which Pertanyaan to delete.
     */
    where: PertanyaanWhereUniqueInput
  }


  /**
   * Pertanyaan deleteMany
   */
  export type PertanyaanDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pertanyaans to delete
     */
    where?: PertanyaanWhereInput
  }


  /**
   * Pertanyaan without action
   */
  export type PertanyaanDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
  }



  /**
   * Model Kata
   */

  export type AggregateKata = {
    _count: KataCountAggregateOutputType | null
    _avg: KataAvgAggregateOutputType | null
    _sum: KataSumAggregateOutputType | null
    _min: KataMinAggregateOutputType | null
    _max: KataMaxAggregateOutputType | null
  }

  export type KataAvgAggregateOutputType = {
    usia: number | null
  }

  export type KataSumAggregateOutputType = {
    usia: number | null
  }

  export type KataMinAggregateOutputType = {
    kata: string | null
    imgLink: string | null
    usia: number | null
  }

  export type KataMaxAggregateOutputType = {
    kata: string | null
    imgLink: string | null
    usia: number | null
  }

  export type KataCountAggregateOutputType = {
    kata: number
    imgLink: number
    usia: number
    _all: number
  }


  export type KataAvgAggregateInputType = {
    usia?: true
  }

  export type KataSumAggregateInputType = {
    usia?: true
  }

  export type KataMinAggregateInputType = {
    kata?: true
    imgLink?: true
    usia?: true
  }

  export type KataMaxAggregateInputType = {
    kata?: true
    imgLink?: true
    usia?: true
  }

  export type KataCountAggregateInputType = {
    kata?: true
    imgLink?: true
    usia?: true
    _all?: true
  }

  export type KataAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kata to aggregate.
     */
    where?: KataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Katas to fetch.
     */
    orderBy?: KataOrderByWithRelationInput | KataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Katas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Katas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Katas
    **/
    _count?: true | KataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KataMaxAggregateInputType
  }

  export type GetKataAggregateType<T extends KataAggregateArgs> = {
        [P in keyof T & keyof AggregateKata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKata[P]>
      : GetScalarType<T[P], AggregateKata[P]>
  }




  export type KataGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: KataWhereInput
    orderBy?: KataOrderByWithAggregationInput | KataOrderByWithAggregationInput[]
    by: KataScalarFieldEnum[] | KataScalarFieldEnum
    having?: KataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KataCountAggregateInputType | true
    _avg?: KataAvgAggregateInputType
    _sum?: KataSumAggregateInputType
    _min?: KataMinAggregateInputType
    _max?: KataMaxAggregateInputType
  }

  export type KataGroupByOutputType = {
    kata: string
    imgLink: string
    usia: number
    _count: KataCountAggregateOutputType | null
    _avg: KataAvgAggregateOutputType | null
    _sum: KataSumAggregateOutputType | null
    _min: KataMinAggregateOutputType | null
    _max: KataMaxAggregateOutputType | null
  }

  type GetKataGroupByPayload<T extends KataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KataGroupByOutputType[P]>
            : GetScalarType<T[P], KataGroupByOutputType[P]>
        }
      >
    >


  export type KataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kata?: boolean
    imgLink?: boolean
    usia?: boolean
    pertanyaan?: boolean | Kata$pertanyaanArgs<ExtArgs>
    _count?: boolean | KataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kata"]>

  export type KataSelectScalar = {
    kata?: boolean
    imgLink?: boolean
    usia?: boolean
  }

  export type KataInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pertanyaan?: boolean | Kata$pertanyaanArgs<ExtArgs>
    _count?: boolean | KataCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KataPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Kata"
    objects: {
      pertanyaan: Prisma.$PertanyaanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      kata: string
      imgLink: string
      usia: number
    }, ExtArgs["result"]["kata"]>
    composites: {}
  }


  type KataGetPayload<S extends boolean | null | undefined | KataDefaultArgs> = $Result.GetResult<Prisma.$KataPayload, S>

  type KataCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<KataFindManyArgs, 'select' | 'include'> & {
      select?: KataCountAggregateInputType | true
    }

  export interface KataDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kata'], meta: { name: 'Kata' } }
    /**
     * Find zero or one Kata that matches the filter.
     * @param {KataFindUniqueArgs} args - Arguments to find a Kata
     * @example
     * // Get one Kata
     * const kata = await prisma.kata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KataFindUniqueArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kata that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KataFindUniqueOrThrowArgs} args - Arguments to find a Kata
     * @example
     * // Get one Kata
     * const kata = await prisma.kata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataFindFirstArgs} args - Arguments to find a Kata
     * @example
     * // Get one Kata
     * const kata = await prisma.kata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KataFindFirstArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataFindFirstOrThrowArgs} args - Arguments to find a Kata
     * @example
     * // Get one Kata
     * const kata = await prisma.kata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Katas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Katas
     * const katas = await prisma.kata.findMany()
     * 
     * // Get first 10 Katas
     * const katas = await prisma.kata.findMany({ take: 10 })
     * 
     * // Only select the `kata`
     * const kataWithKataOnly = await prisma.kata.findMany({ select: { kata: true } })
     * 
    **/
    findMany<T extends KataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kata.
     * @param {KataCreateArgs} args - Arguments to create a Kata.
     * @example
     * // Create one Kata
     * const Kata = await prisma.kata.create({
     *   data: {
     *     // ... data to create a Kata
     *   }
     * })
     * 
    **/
    create<T extends KataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KataCreateArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Katas.
     *     @param {KataCreateManyArgs} args - Arguments to create many Katas.
     *     @example
     *     // Create many Katas
     *     const kata = await prisma.kata.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kata.
     * @param {KataDeleteArgs} args - Arguments to delete one Kata.
     * @example
     * // Delete one Kata
     * const Kata = await prisma.kata.delete({
     *   where: {
     *     // ... filter to delete one Kata
     *   }
     * })
     * 
    **/
    delete<T extends KataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KataDeleteArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kata.
     * @param {KataUpdateArgs} args - Arguments to update one Kata.
     * @example
     * // Update one Kata
     * const kata = await prisma.kata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KataUpdateArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Katas.
     * @param {KataDeleteManyArgs} args - Arguments to filter Katas to delete.
     * @example
     * // Delete a few Katas
     * const { count } = await prisma.kata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Katas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Katas
     * const kata = await prisma.kata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kata.
     * @param {KataUpsertArgs} args - Arguments to update or create a Kata.
     * @example
     * // Update or create a Kata
     * const kata = await prisma.kata.upsert({
     *   create: {
     *     // ... data to create a Kata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kata we want to update
     *   }
     * })
    **/
    upsert<T extends KataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KataUpsertArgs<ExtArgs>>
    ): Prisma__KataClient<$Result.GetResult<Prisma.$KataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Katas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataCountArgs} args - Arguments to filter Katas to count.
     * @example
     * // Count the number of Katas
     * const count = await prisma.kata.count({
     *   where: {
     *     // ... the filter for the Katas we want to count
     *   }
     * })
    **/
    count<T extends KataCountArgs>(
      args?: Subset<T, KataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KataAggregateArgs>(args: Subset<T, KataAggregateArgs>): Prisma.PrismaPromise<GetKataAggregateType<T>>

    /**
     * Group by Kata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KataGroupByArgs['orderBy'] }
        : { orderBy?: KataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kata model
   */
  readonly fields: KataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KataClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pertanyaan<T extends Kata$pertanyaanArgs<ExtArgs> = {}>(args?: Subset<T, Kata$pertanyaanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertanyaanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Kata model
   */ 
  interface KataFieldRefs {
    readonly kata: FieldRef<"Kata", 'String'>
    readonly imgLink: FieldRef<"Kata", 'String'>
    readonly usia: FieldRef<"Kata", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Kata findUnique
   */
  export type KataFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * Filter, which Kata to fetch.
     */
    where: KataWhereUniqueInput
  }


  /**
   * Kata findUniqueOrThrow
   */
  export type KataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * Filter, which Kata to fetch.
     */
    where: KataWhereUniqueInput
  }


  /**
   * Kata findFirst
   */
  export type KataFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * Filter, which Kata to fetch.
     */
    where?: KataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Katas to fetch.
     */
    orderBy?: KataOrderByWithRelationInput | KataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Katas.
     */
    cursor?: KataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Katas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Katas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Katas.
     */
    distinct?: KataScalarFieldEnum | KataScalarFieldEnum[]
  }


  /**
   * Kata findFirstOrThrow
   */
  export type KataFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * Filter, which Kata to fetch.
     */
    where?: KataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Katas to fetch.
     */
    orderBy?: KataOrderByWithRelationInput | KataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Katas.
     */
    cursor?: KataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Katas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Katas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Katas.
     */
    distinct?: KataScalarFieldEnum | KataScalarFieldEnum[]
  }


  /**
   * Kata findMany
   */
  export type KataFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * Filter, which Katas to fetch.
     */
    where?: KataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Katas to fetch.
     */
    orderBy?: KataOrderByWithRelationInput | KataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Katas.
     */
    cursor?: KataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Katas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Katas.
     */
    skip?: number
    distinct?: KataScalarFieldEnum | KataScalarFieldEnum[]
  }


  /**
   * Kata create
   */
  export type KataCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * The data needed to create a Kata.
     */
    data: XOR<KataCreateInput, KataUncheckedCreateInput>
  }


  /**
   * Kata createMany
   */
  export type KataCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Katas.
     */
    data: KataCreateManyInput | KataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Kata update
   */
  export type KataUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * The data needed to update a Kata.
     */
    data: XOR<KataUpdateInput, KataUncheckedUpdateInput>
    /**
     * Choose, which Kata to update.
     */
    where: KataWhereUniqueInput
  }


  /**
   * Kata updateMany
   */
  export type KataUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Katas.
     */
    data: XOR<KataUpdateManyMutationInput, KataUncheckedUpdateManyInput>
    /**
     * Filter which Katas to update
     */
    where?: KataWhereInput
  }


  /**
   * Kata upsert
   */
  export type KataUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * The filter to search for the Kata to update in case it exists.
     */
    where: KataWhereUniqueInput
    /**
     * In case the Kata found by the `where` argument doesn't exist, create a new Kata with this data.
     */
    create: XOR<KataCreateInput, KataUncheckedCreateInput>
    /**
     * In case the Kata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KataUpdateInput, KataUncheckedUpdateInput>
  }


  /**
   * Kata delete
   */
  export type KataDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
    /**
     * Filter which Kata to delete.
     */
    where: KataWhereUniqueInput
  }


  /**
   * Kata deleteMany
   */
  export type KataDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Katas to delete
     */
    where?: KataWhereInput
  }


  /**
   * Kata.pertanyaan
   */
  export type Kata$pertanyaanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertanyaan
     */
    select?: PertanyaanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PertanyaanInclude<ExtArgs> | null
    where?: PertanyaanWhereInput
    orderBy?: PertanyaanOrderByWithRelationInput | PertanyaanOrderByWithRelationInput[]
    cursor?: PertanyaanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PertanyaanScalarFieldEnum | PertanyaanScalarFieldEnum[]
  }


  /**
   * Kata without action
   */
  export type KataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kata
     */
    select?: KataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KataInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uuid: 'uuid',
    email: 'email',
    nama: 'nama',
    phone: 'phone',
    address: 'address',
    emailValid: 'emailValid'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnakScalarFieldEnum: {
    uuid: 'uuid',
    idUser: 'idUser',
    nama: 'nama',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin'
  };

  export type AnakScalarFieldEnum = (typeof AnakScalarFieldEnum)[keyof typeof AnakScalarFieldEnum]


  export const TestScalarFieldEnum: {
    uuid: 'uuid',
    idAnak: 'idAnak',
    timestamp: 'timestamp',
    hasil: 'hasil',
    rekomendasi: 'rekomendasi'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const PertanyaanScalarFieldEnum: {
    uuid: 'uuid',
    idTest: 'idTest',
    kataStr: 'kataStr',
    jawaban: 'jawaban',
    kebenaran: 'kebenaran'
  };

  export type PertanyaanScalarFieldEnum = (typeof PertanyaanScalarFieldEnum)[keyof typeof PertanyaanScalarFieldEnum]


  export const KataScalarFieldEnum: {
    kata: 'kata',
    imgLink: 'imgLink',
    usia: 'usia'
  };

  export type KataScalarFieldEnum = (typeof KataScalarFieldEnum)[keyof typeof KataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uuid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    emailValid?: BoolNullableFilter<"User"> | boolean | null
    anak?: AnakListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uuid?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emailValid?: SortOrderInput | SortOrder
    anak?: AnakOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    emailValid?: BoolNullableFilter<"User"> | boolean | null
    anak?: AnakListRelationFilter
  }, "uuid" | "email">

  export type UserOrderByWithAggregationInput = {
    uuid?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emailValid?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailValid?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
  }

  export type AnakWhereInput = {
    AND?: AnakWhereInput | AnakWhereInput[]
    OR?: AnakWhereInput[]
    NOT?: AnakWhereInput | AnakWhereInput[]
    uuid?: StringFilter<"Anak"> | string
    idUser?: StringFilter<"Anak"> | string
    nama?: StringFilter<"Anak"> | string
    tanggalLahir?: DateTimeFilter<"Anak"> | Date | string
    jenisKelamin?: EnumJenisKelaminFilter<"Anak"> | $Enums.JenisKelamin
    user?: XOR<UserRelationFilter, UserWhereInput>
    test?: TestListRelationFilter
  }

  export type AnakOrderByWithRelationInput = {
    uuid?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    user?: UserOrderByWithRelationInput
    test?: TestOrderByRelationAggregateInput
  }

  export type AnakWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: AnakWhereInput | AnakWhereInput[]
    OR?: AnakWhereInput[]
    NOT?: AnakWhereInput | AnakWhereInput[]
    idUser?: StringFilter<"Anak"> | string
    nama?: StringFilter<"Anak"> | string
    tanggalLahir?: DateTimeFilter<"Anak"> | Date | string
    jenisKelamin?: EnumJenisKelaminFilter<"Anak"> | $Enums.JenisKelamin
    user?: XOR<UserRelationFilter, UserWhereInput>
    test?: TestListRelationFilter
  }, "uuid">

  export type AnakOrderByWithAggregationInput = {
    uuid?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    _count?: AnakCountOrderByAggregateInput
    _max?: AnakMaxOrderByAggregateInput
    _min?: AnakMinOrderByAggregateInput
  }

  export type AnakScalarWhereWithAggregatesInput = {
    AND?: AnakScalarWhereWithAggregatesInput | AnakScalarWhereWithAggregatesInput[]
    OR?: AnakScalarWhereWithAggregatesInput[]
    NOT?: AnakScalarWhereWithAggregatesInput | AnakScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Anak"> | string
    idUser?: StringWithAggregatesFilter<"Anak"> | string
    nama?: StringWithAggregatesFilter<"Anak"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"Anak"> | Date | string
    jenisKelamin?: EnumJenisKelaminWithAggregatesFilter<"Anak"> | $Enums.JenisKelamin
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    uuid?: StringFilter<"Test"> | string
    idAnak?: StringFilter<"Test"> | string
    timestamp?: DateTimeFilter<"Test"> | Date | string
    hasil?: StringNullableFilter<"Test"> | string | null
    rekomendasi?: StringNullableFilter<"Test"> | string | null
    anak?: XOR<AnakRelationFilter, AnakWhereInput>
    pertanyaan?: PertanyaanListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    uuid?: SortOrder
    idAnak?: SortOrder
    timestamp?: SortOrder
    hasil?: SortOrderInput | SortOrder
    rekomendasi?: SortOrderInput | SortOrder
    anak?: AnakOrderByWithRelationInput
    pertanyaan?: PertanyaanOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    idAnak?: StringFilter<"Test"> | string
    timestamp?: DateTimeFilter<"Test"> | Date | string
    hasil?: StringNullableFilter<"Test"> | string | null
    rekomendasi?: StringNullableFilter<"Test"> | string | null
    anak?: XOR<AnakRelationFilter, AnakWhereInput>
    pertanyaan?: PertanyaanListRelationFilter
  }, "uuid">

  export type TestOrderByWithAggregationInput = {
    uuid?: SortOrder
    idAnak?: SortOrder
    timestamp?: SortOrder
    hasil?: SortOrderInput | SortOrder
    rekomendasi?: SortOrderInput | SortOrder
    _count?: TestCountOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Test"> | string
    idAnak?: StringWithAggregatesFilter<"Test"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    hasil?: StringNullableWithAggregatesFilter<"Test"> | string | null
    rekomendasi?: StringNullableWithAggregatesFilter<"Test"> | string | null
  }

  export type PertanyaanWhereInput = {
    AND?: PertanyaanWhereInput | PertanyaanWhereInput[]
    OR?: PertanyaanWhereInput[]
    NOT?: PertanyaanWhereInput | PertanyaanWhereInput[]
    uuid?: StringFilter<"Pertanyaan"> | string
    idTest?: StringFilter<"Pertanyaan"> | string
    kataStr?: StringFilter<"Pertanyaan"> | string
    jawaban?: StringNullableFilter<"Pertanyaan"> | string | null
    kebenaran?: BoolFilter<"Pertanyaan"> | boolean
    test?: XOR<TestRelationFilter, TestWhereInput>
    kata?: XOR<KataRelationFilter, KataWhereInput>
  }

  export type PertanyaanOrderByWithRelationInput = {
    uuid?: SortOrder
    idTest?: SortOrder
    kataStr?: SortOrder
    jawaban?: SortOrderInput | SortOrder
    kebenaran?: SortOrder
    test?: TestOrderByWithRelationInput
    kata?: KataOrderByWithRelationInput
  }

  export type PertanyaanWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PertanyaanWhereInput | PertanyaanWhereInput[]
    OR?: PertanyaanWhereInput[]
    NOT?: PertanyaanWhereInput | PertanyaanWhereInput[]
    idTest?: StringFilter<"Pertanyaan"> | string
    kataStr?: StringFilter<"Pertanyaan"> | string
    jawaban?: StringNullableFilter<"Pertanyaan"> | string | null
    kebenaran?: BoolFilter<"Pertanyaan"> | boolean
    test?: XOR<TestRelationFilter, TestWhereInput>
    kata?: XOR<KataRelationFilter, KataWhereInput>
  }, "uuid">

  export type PertanyaanOrderByWithAggregationInput = {
    uuid?: SortOrder
    idTest?: SortOrder
    kataStr?: SortOrder
    jawaban?: SortOrderInput | SortOrder
    kebenaran?: SortOrder
    _count?: PertanyaanCountOrderByAggregateInput
    _max?: PertanyaanMaxOrderByAggregateInput
    _min?: PertanyaanMinOrderByAggregateInput
  }

  export type PertanyaanScalarWhereWithAggregatesInput = {
    AND?: PertanyaanScalarWhereWithAggregatesInput | PertanyaanScalarWhereWithAggregatesInput[]
    OR?: PertanyaanScalarWhereWithAggregatesInput[]
    NOT?: PertanyaanScalarWhereWithAggregatesInput | PertanyaanScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Pertanyaan"> | string
    idTest?: StringWithAggregatesFilter<"Pertanyaan"> | string
    kataStr?: StringWithAggregatesFilter<"Pertanyaan"> | string
    jawaban?: StringNullableWithAggregatesFilter<"Pertanyaan"> | string | null
    kebenaran?: BoolWithAggregatesFilter<"Pertanyaan"> | boolean
  }

  export type KataWhereInput = {
    AND?: KataWhereInput | KataWhereInput[]
    OR?: KataWhereInput[]
    NOT?: KataWhereInput | KataWhereInput[]
    kata?: StringFilter<"Kata"> | string
    imgLink?: StringFilter<"Kata"> | string
    usia?: IntFilter<"Kata"> | number
    pertanyaan?: PertanyaanListRelationFilter
  }

  export type KataOrderByWithRelationInput = {
    kata?: SortOrder
    imgLink?: SortOrder
    usia?: SortOrder
    pertanyaan?: PertanyaanOrderByRelationAggregateInput
  }

  export type KataWhereUniqueInput = Prisma.AtLeast<{
    kata?: string
    AND?: KataWhereInput | KataWhereInput[]
    OR?: KataWhereInput[]
    NOT?: KataWhereInput | KataWhereInput[]
    imgLink?: StringFilter<"Kata"> | string
    usia?: IntFilter<"Kata"> | number
    pertanyaan?: PertanyaanListRelationFilter
  }, "kata">

  export type KataOrderByWithAggregationInput = {
    kata?: SortOrder
    imgLink?: SortOrder
    usia?: SortOrder
    _count?: KataCountOrderByAggregateInput
    _avg?: KataAvgOrderByAggregateInput
    _max?: KataMaxOrderByAggregateInput
    _min?: KataMinOrderByAggregateInput
    _sum?: KataSumOrderByAggregateInput
  }

  export type KataScalarWhereWithAggregatesInput = {
    AND?: KataScalarWhereWithAggregatesInput | KataScalarWhereWithAggregatesInput[]
    OR?: KataScalarWhereWithAggregatesInput[]
    NOT?: KataScalarWhereWithAggregatesInput | KataScalarWhereWithAggregatesInput[]
    kata?: StringWithAggregatesFilter<"Kata"> | string
    imgLink?: StringWithAggregatesFilter<"Kata"> | string
    usia?: IntWithAggregatesFilter<"Kata"> | number
  }

  export type UserCreateInput = {
    uuid?: string
    email: string
    nama: string
    phone?: string | null
    address?: string | null
    emailValid?: boolean | null
    anak?: AnakCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uuid?: string
    email: string
    nama: string
    phone?: string | null
    address?: string | null
    emailValid?: boolean | null
    anak?: AnakUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emailValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    anak?: AnakUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emailValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    anak?: AnakUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uuid?: string
    email: string
    nama: string
    phone?: string | null
    address?: string | null
    emailValid?: boolean | null
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emailValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emailValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AnakCreateInput = {
    uuid?: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    user: UserCreateNestedOneWithoutAnakInput
    test?: TestCreateNestedManyWithoutAnakInput
  }

  export type AnakUncheckedCreateInput = {
    uuid?: string
    idUser: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    test?: TestUncheckedCreateNestedManyWithoutAnakInput
  }

  export type AnakUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    user?: UserUpdateOneRequiredWithoutAnakNestedInput
    test?: TestUpdateManyWithoutAnakNestedInput
  }

  export type AnakUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    test?: TestUncheckedUpdateManyWithoutAnakNestedInput
  }

  export type AnakCreateManyInput = {
    uuid?: string
    idUser: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
  }

  export type AnakUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
  }

  export type AnakUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
  }

  export type TestCreateInput = {
    uuid?: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
    anak: AnakCreateNestedOneWithoutTestInput
    pertanyaan?: PertanyaanCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    uuid?: string
    idAnak: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
    pertanyaan?: PertanyaanUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
    anak?: AnakUpdateOneRequiredWithoutTestNestedInput
    pertanyaan?: PertanyaanUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idAnak?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: PertanyaanUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    uuid?: string
    idAnak: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
  }

  export type TestUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idAnak?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PertanyaanCreateInput = {
    uuid?: string
    jawaban?: string | null
    kebenaran?: boolean
    test: TestCreateNestedOneWithoutPertanyaanInput
    kata: KataCreateNestedOneWithoutPertanyaanInput
  }

  export type PertanyaanUncheckedCreateInput = {
    uuid?: string
    idTest: string
    kataStr: string
    jawaban?: string | null
    kebenaran?: boolean
  }

  export type PertanyaanUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
    test?: TestUpdateOneRequiredWithoutPertanyaanNestedInput
    kata?: KataUpdateOneRequiredWithoutPertanyaanNestedInput
  }

  export type PertanyaanUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idTest?: StringFieldUpdateOperationsInput | string
    kataStr?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PertanyaanCreateManyInput = {
    uuid?: string
    idTest: string
    kataStr: string
    jawaban?: string | null
    kebenaran?: boolean
  }

  export type PertanyaanUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PertanyaanUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idTest?: StringFieldUpdateOperationsInput | string
    kataStr?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KataCreateInput = {
    kata: string
    imgLink: string
    usia: number
    pertanyaan?: PertanyaanCreateNestedManyWithoutKataInput
  }

  export type KataUncheckedCreateInput = {
    kata: string
    imgLink: string
    usia: number
    pertanyaan?: PertanyaanUncheckedCreateNestedManyWithoutKataInput
  }

  export type KataUpdateInput = {
    kata?: StringFieldUpdateOperationsInput | string
    imgLink?: StringFieldUpdateOperationsInput | string
    usia?: IntFieldUpdateOperationsInput | number
    pertanyaan?: PertanyaanUpdateManyWithoutKataNestedInput
  }

  export type KataUncheckedUpdateInput = {
    kata?: StringFieldUpdateOperationsInput | string
    imgLink?: StringFieldUpdateOperationsInput | string
    usia?: IntFieldUpdateOperationsInput | number
    pertanyaan?: PertanyaanUncheckedUpdateManyWithoutKataNestedInput
  }

  export type KataCreateManyInput = {
    kata: string
    imgLink: string
    usia: number
  }

  export type KataUpdateManyMutationInput = {
    kata?: StringFieldUpdateOperationsInput | string
    imgLink?: StringFieldUpdateOperationsInput | string
    usia?: IntFieldUpdateOperationsInput | number
  }

  export type KataUncheckedUpdateManyInput = {
    kata?: StringFieldUpdateOperationsInput | string
    imgLink?: StringFieldUpdateOperationsInput | string
    usia?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AnakListRelationFilter = {
    every?: AnakWhereInput
    some?: AnakWhereInput
    none?: AnakWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emailValid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emailValid?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emailValid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnakCountOrderByAggregateInput = {
    uuid?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
  }

  export type AnakMaxOrderByAggregateInput = {
    uuid?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
  }

  export type AnakMinOrderByAggregateInput = {
    uuid?: SortOrder
    idUser?: SortOrder
    nama?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type AnakRelationFilter = {
    is?: AnakWhereInput
    isNot?: AnakWhereInput
  }

  export type PertanyaanListRelationFilter = {
    every?: PertanyaanWhereInput
    some?: PertanyaanWhereInput
    none?: PertanyaanWhereInput
  }

  export type PertanyaanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    uuid?: SortOrder
    idAnak?: SortOrder
    timestamp?: SortOrder
    hasil?: SortOrder
    rekomendasi?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    uuid?: SortOrder
    idAnak?: SortOrder
    timestamp?: SortOrder
    hasil?: SortOrder
    rekomendasi?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    uuid?: SortOrder
    idAnak?: SortOrder
    timestamp?: SortOrder
    hasil?: SortOrder
    rekomendasi?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TestRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type KataRelationFilter = {
    is?: KataWhereInput
    isNot?: KataWhereInput
  }

  export type PertanyaanCountOrderByAggregateInput = {
    uuid?: SortOrder
    idTest?: SortOrder
    kataStr?: SortOrder
    jawaban?: SortOrder
    kebenaran?: SortOrder
  }

  export type PertanyaanMaxOrderByAggregateInput = {
    uuid?: SortOrder
    idTest?: SortOrder
    kataStr?: SortOrder
    jawaban?: SortOrder
    kebenaran?: SortOrder
  }

  export type PertanyaanMinOrderByAggregateInput = {
    uuid?: SortOrder
    idTest?: SortOrder
    kataStr?: SortOrder
    jawaban?: SortOrder
    kebenaran?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KataCountOrderByAggregateInput = {
    kata?: SortOrder
    imgLink?: SortOrder
    usia?: SortOrder
  }

  export type KataAvgOrderByAggregateInput = {
    usia?: SortOrder
  }

  export type KataMaxOrderByAggregateInput = {
    kata?: SortOrder
    imgLink?: SortOrder
    usia?: SortOrder
  }

  export type KataMinOrderByAggregateInput = {
    kata?: SortOrder
    imgLink?: SortOrder
    usia?: SortOrder
  }

  export type KataSumOrderByAggregateInput = {
    usia?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AnakCreateNestedManyWithoutUserInput = {
    create?: XOR<AnakCreateWithoutUserInput, AnakUncheckedCreateWithoutUserInput> | AnakCreateWithoutUserInput[] | AnakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnakCreateOrConnectWithoutUserInput | AnakCreateOrConnectWithoutUserInput[]
    createMany?: AnakCreateManyUserInputEnvelope
    connect?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
  }

  export type AnakUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnakCreateWithoutUserInput, AnakUncheckedCreateWithoutUserInput> | AnakCreateWithoutUserInput[] | AnakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnakCreateOrConnectWithoutUserInput | AnakCreateOrConnectWithoutUserInput[]
    createMany?: AnakCreateManyUserInputEnvelope
    connect?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AnakUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnakCreateWithoutUserInput, AnakUncheckedCreateWithoutUserInput> | AnakCreateWithoutUserInput[] | AnakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnakCreateOrConnectWithoutUserInput | AnakCreateOrConnectWithoutUserInput[]
    upsert?: AnakUpsertWithWhereUniqueWithoutUserInput | AnakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnakCreateManyUserInputEnvelope
    set?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    disconnect?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    delete?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    connect?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    update?: AnakUpdateWithWhereUniqueWithoutUserInput | AnakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnakUpdateManyWithWhereWithoutUserInput | AnakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnakScalarWhereInput | AnakScalarWhereInput[]
  }

  export type AnakUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnakCreateWithoutUserInput, AnakUncheckedCreateWithoutUserInput> | AnakCreateWithoutUserInput[] | AnakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnakCreateOrConnectWithoutUserInput | AnakCreateOrConnectWithoutUserInput[]
    upsert?: AnakUpsertWithWhereUniqueWithoutUserInput | AnakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnakCreateManyUserInputEnvelope
    set?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    disconnect?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    delete?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    connect?: AnakWhereUniqueInput | AnakWhereUniqueInput[]
    update?: AnakUpdateWithWhereUniqueWithoutUserInput | AnakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnakUpdateManyWithWhereWithoutUserInput | AnakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnakScalarWhereInput | AnakScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnakInput = {
    create?: XOR<UserCreateWithoutAnakInput, UserUncheckedCreateWithoutAnakInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnakInput
    connect?: UserWhereUniqueInput
  }

  export type TestCreateNestedManyWithoutAnakInput = {
    create?: XOR<TestCreateWithoutAnakInput, TestUncheckedCreateWithoutAnakInput> | TestCreateWithoutAnakInput[] | TestUncheckedCreateWithoutAnakInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAnakInput | TestCreateOrConnectWithoutAnakInput[]
    createMany?: TestCreateManyAnakInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutAnakInput = {
    create?: XOR<TestCreateWithoutAnakInput, TestUncheckedCreateWithoutAnakInput> | TestCreateWithoutAnakInput[] | TestUncheckedCreateWithoutAnakInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAnakInput | TestCreateOrConnectWithoutAnakInput[]
    createMany?: TestCreateManyAnakInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type UserUpdateOneRequiredWithoutAnakNestedInput = {
    create?: XOR<UserCreateWithoutAnakInput, UserUncheckedCreateWithoutAnakInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnakInput
    upsert?: UserUpsertWithoutAnakInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnakInput, UserUpdateWithoutAnakInput>, UserUncheckedUpdateWithoutAnakInput>
  }

  export type TestUpdateManyWithoutAnakNestedInput = {
    create?: XOR<TestCreateWithoutAnakInput, TestUncheckedCreateWithoutAnakInput> | TestCreateWithoutAnakInput[] | TestUncheckedCreateWithoutAnakInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAnakInput | TestCreateOrConnectWithoutAnakInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutAnakInput | TestUpsertWithWhereUniqueWithoutAnakInput[]
    createMany?: TestCreateManyAnakInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutAnakInput | TestUpdateWithWhereUniqueWithoutAnakInput[]
    updateMany?: TestUpdateManyWithWhereWithoutAnakInput | TestUpdateManyWithWhereWithoutAnakInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutAnakNestedInput = {
    create?: XOR<TestCreateWithoutAnakInput, TestUncheckedCreateWithoutAnakInput> | TestCreateWithoutAnakInput[] | TestUncheckedCreateWithoutAnakInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAnakInput | TestCreateOrConnectWithoutAnakInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutAnakInput | TestUpsertWithWhereUniqueWithoutAnakInput[]
    createMany?: TestCreateManyAnakInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutAnakInput | TestUpdateWithWhereUniqueWithoutAnakInput[]
    updateMany?: TestUpdateManyWithWhereWithoutAnakInput | TestUpdateManyWithWhereWithoutAnakInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type AnakCreateNestedOneWithoutTestInput = {
    create?: XOR<AnakCreateWithoutTestInput, AnakUncheckedCreateWithoutTestInput>
    connectOrCreate?: AnakCreateOrConnectWithoutTestInput
    connect?: AnakWhereUniqueInput
  }

  export type PertanyaanCreateNestedManyWithoutTestInput = {
    create?: XOR<PertanyaanCreateWithoutTestInput, PertanyaanUncheckedCreateWithoutTestInput> | PertanyaanCreateWithoutTestInput[] | PertanyaanUncheckedCreateWithoutTestInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutTestInput | PertanyaanCreateOrConnectWithoutTestInput[]
    createMany?: PertanyaanCreateManyTestInputEnvelope
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
  }

  export type PertanyaanUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<PertanyaanCreateWithoutTestInput, PertanyaanUncheckedCreateWithoutTestInput> | PertanyaanCreateWithoutTestInput[] | PertanyaanUncheckedCreateWithoutTestInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutTestInput | PertanyaanCreateOrConnectWithoutTestInput[]
    createMany?: PertanyaanCreateManyTestInputEnvelope
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
  }

  export type AnakUpdateOneRequiredWithoutTestNestedInput = {
    create?: XOR<AnakCreateWithoutTestInput, AnakUncheckedCreateWithoutTestInput>
    connectOrCreate?: AnakCreateOrConnectWithoutTestInput
    upsert?: AnakUpsertWithoutTestInput
    connect?: AnakWhereUniqueInput
    update?: XOR<XOR<AnakUpdateToOneWithWhereWithoutTestInput, AnakUpdateWithoutTestInput>, AnakUncheckedUpdateWithoutTestInput>
  }

  export type PertanyaanUpdateManyWithoutTestNestedInput = {
    create?: XOR<PertanyaanCreateWithoutTestInput, PertanyaanUncheckedCreateWithoutTestInput> | PertanyaanCreateWithoutTestInput[] | PertanyaanUncheckedCreateWithoutTestInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutTestInput | PertanyaanCreateOrConnectWithoutTestInput[]
    upsert?: PertanyaanUpsertWithWhereUniqueWithoutTestInput | PertanyaanUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: PertanyaanCreateManyTestInputEnvelope
    set?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    disconnect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    delete?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    update?: PertanyaanUpdateWithWhereUniqueWithoutTestInput | PertanyaanUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: PertanyaanUpdateManyWithWhereWithoutTestInput | PertanyaanUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: PertanyaanScalarWhereInput | PertanyaanScalarWhereInput[]
  }

  export type PertanyaanUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<PertanyaanCreateWithoutTestInput, PertanyaanUncheckedCreateWithoutTestInput> | PertanyaanCreateWithoutTestInput[] | PertanyaanUncheckedCreateWithoutTestInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutTestInput | PertanyaanCreateOrConnectWithoutTestInput[]
    upsert?: PertanyaanUpsertWithWhereUniqueWithoutTestInput | PertanyaanUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: PertanyaanCreateManyTestInputEnvelope
    set?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    disconnect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    delete?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    update?: PertanyaanUpdateWithWhereUniqueWithoutTestInput | PertanyaanUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: PertanyaanUpdateManyWithWhereWithoutTestInput | PertanyaanUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: PertanyaanScalarWhereInput | PertanyaanScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutPertanyaanInput = {
    create?: XOR<TestCreateWithoutPertanyaanInput, TestUncheckedCreateWithoutPertanyaanInput>
    connectOrCreate?: TestCreateOrConnectWithoutPertanyaanInput
    connect?: TestWhereUniqueInput
  }

  export type KataCreateNestedOneWithoutPertanyaanInput = {
    create?: XOR<KataCreateWithoutPertanyaanInput, KataUncheckedCreateWithoutPertanyaanInput>
    connectOrCreate?: KataCreateOrConnectWithoutPertanyaanInput
    connect?: KataWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TestUpdateOneRequiredWithoutPertanyaanNestedInput = {
    create?: XOR<TestCreateWithoutPertanyaanInput, TestUncheckedCreateWithoutPertanyaanInput>
    connectOrCreate?: TestCreateOrConnectWithoutPertanyaanInput
    upsert?: TestUpsertWithoutPertanyaanInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutPertanyaanInput, TestUpdateWithoutPertanyaanInput>, TestUncheckedUpdateWithoutPertanyaanInput>
  }

  export type KataUpdateOneRequiredWithoutPertanyaanNestedInput = {
    create?: XOR<KataCreateWithoutPertanyaanInput, KataUncheckedCreateWithoutPertanyaanInput>
    connectOrCreate?: KataCreateOrConnectWithoutPertanyaanInput
    upsert?: KataUpsertWithoutPertanyaanInput
    connect?: KataWhereUniqueInput
    update?: XOR<XOR<KataUpdateToOneWithWhereWithoutPertanyaanInput, KataUpdateWithoutPertanyaanInput>, KataUncheckedUpdateWithoutPertanyaanInput>
  }

  export type PertanyaanCreateNestedManyWithoutKataInput = {
    create?: XOR<PertanyaanCreateWithoutKataInput, PertanyaanUncheckedCreateWithoutKataInput> | PertanyaanCreateWithoutKataInput[] | PertanyaanUncheckedCreateWithoutKataInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutKataInput | PertanyaanCreateOrConnectWithoutKataInput[]
    createMany?: PertanyaanCreateManyKataInputEnvelope
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
  }

  export type PertanyaanUncheckedCreateNestedManyWithoutKataInput = {
    create?: XOR<PertanyaanCreateWithoutKataInput, PertanyaanUncheckedCreateWithoutKataInput> | PertanyaanCreateWithoutKataInput[] | PertanyaanUncheckedCreateWithoutKataInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutKataInput | PertanyaanCreateOrConnectWithoutKataInput[]
    createMany?: PertanyaanCreateManyKataInputEnvelope
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PertanyaanUpdateManyWithoutKataNestedInput = {
    create?: XOR<PertanyaanCreateWithoutKataInput, PertanyaanUncheckedCreateWithoutKataInput> | PertanyaanCreateWithoutKataInput[] | PertanyaanUncheckedCreateWithoutKataInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutKataInput | PertanyaanCreateOrConnectWithoutKataInput[]
    upsert?: PertanyaanUpsertWithWhereUniqueWithoutKataInput | PertanyaanUpsertWithWhereUniqueWithoutKataInput[]
    createMany?: PertanyaanCreateManyKataInputEnvelope
    set?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    disconnect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    delete?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    update?: PertanyaanUpdateWithWhereUniqueWithoutKataInput | PertanyaanUpdateWithWhereUniqueWithoutKataInput[]
    updateMany?: PertanyaanUpdateManyWithWhereWithoutKataInput | PertanyaanUpdateManyWithWhereWithoutKataInput[]
    deleteMany?: PertanyaanScalarWhereInput | PertanyaanScalarWhereInput[]
  }

  export type PertanyaanUncheckedUpdateManyWithoutKataNestedInput = {
    create?: XOR<PertanyaanCreateWithoutKataInput, PertanyaanUncheckedCreateWithoutKataInput> | PertanyaanCreateWithoutKataInput[] | PertanyaanUncheckedCreateWithoutKataInput[]
    connectOrCreate?: PertanyaanCreateOrConnectWithoutKataInput | PertanyaanCreateOrConnectWithoutKataInput[]
    upsert?: PertanyaanUpsertWithWhereUniqueWithoutKataInput | PertanyaanUpsertWithWhereUniqueWithoutKataInput[]
    createMany?: PertanyaanCreateManyKataInputEnvelope
    set?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    disconnect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    delete?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    connect?: PertanyaanWhereUniqueInput | PertanyaanWhereUniqueInput[]
    update?: PertanyaanUpdateWithWhereUniqueWithoutKataInput | PertanyaanUpdateWithWhereUniqueWithoutKataInput[]
    updateMany?: PertanyaanUpdateManyWithWhereWithoutKataInput | PertanyaanUpdateManyWithWhereWithoutKataInput[]
    deleteMany?: PertanyaanScalarWhereInput | PertanyaanScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnakCreateWithoutUserInput = {
    uuid?: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    test?: TestCreateNestedManyWithoutAnakInput
  }

  export type AnakUncheckedCreateWithoutUserInput = {
    uuid?: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    test?: TestUncheckedCreateNestedManyWithoutAnakInput
  }

  export type AnakCreateOrConnectWithoutUserInput = {
    where: AnakWhereUniqueInput
    create: XOR<AnakCreateWithoutUserInput, AnakUncheckedCreateWithoutUserInput>
  }

  export type AnakCreateManyUserInputEnvelope = {
    data: AnakCreateManyUserInput | AnakCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnakUpsertWithWhereUniqueWithoutUserInput = {
    where: AnakWhereUniqueInput
    update: XOR<AnakUpdateWithoutUserInput, AnakUncheckedUpdateWithoutUserInput>
    create: XOR<AnakCreateWithoutUserInput, AnakUncheckedCreateWithoutUserInput>
  }

  export type AnakUpdateWithWhereUniqueWithoutUserInput = {
    where: AnakWhereUniqueInput
    data: XOR<AnakUpdateWithoutUserInput, AnakUncheckedUpdateWithoutUserInput>
  }

  export type AnakUpdateManyWithWhereWithoutUserInput = {
    where: AnakScalarWhereInput
    data: XOR<AnakUpdateManyMutationInput, AnakUncheckedUpdateManyWithoutUserInput>
  }

  export type AnakScalarWhereInput = {
    AND?: AnakScalarWhereInput | AnakScalarWhereInput[]
    OR?: AnakScalarWhereInput[]
    NOT?: AnakScalarWhereInput | AnakScalarWhereInput[]
    uuid?: StringFilter<"Anak"> | string
    idUser?: StringFilter<"Anak"> | string
    nama?: StringFilter<"Anak"> | string
    tanggalLahir?: DateTimeFilter<"Anak"> | Date | string
    jenisKelamin?: EnumJenisKelaminFilter<"Anak"> | $Enums.JenisKelamin
  }

  export type UserCreateWithoutAnakInput = {
    uuid?: string
    email: string
    nama: string
    phone?: string | null
    address?: string | null
    emailValid?: boolean | null
  }

  export type UserUncheckedCreateWithoutAnakInput = {
    uuid?: string
    email: string
    nama: string
    phone?: string | null
    address?: string | null
    emailValid?: boolean | null
  }

  export type UserCreateOrConnectWithoutAnakInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnakInput, UserUncheckedCreateWithoutAnakInput>
  }

  export type TestCreateWithoutAnakInput = {
    uuid?: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
    pertanyaan?: PertanyaanCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutAnakInput = {
    uuid?: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
    pertanyaan?: PertanyaanUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutAnakInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutAnakInput, TestUncheckedCreateWithoutAnakInput>
  }

  export type TestCreateManyAnakInputEnvelope = {
    data: TestCreateManyAnakInput | TestCreateManyAnakInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAnakInput = {
    update: XOR<UserUpdateWithoutAnakInput, UserUncheckedUpdateWithoutAnakInput>
    create: XOR<UserCreateWithoutAnakInput, UserUncheckedCreateWithoutAnakInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnakInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnakInput, UserUncheckedUpdateWithoutAnakInput>
  }

  export type UserUpdateWithoutAnakInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emailValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateWithoutAnakInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emailValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TestUpsertWithWhereUniqueWithoutAnakInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutAnakInput, TestUncheckedUpdateWithoutAnakInput>
    create: XOR<TestCreateWithoutAnakInput, TestUncheckedCreateWithoutAnakInput>
  }

  export type TestUpdateWithWhereUniqueWithoutAnakInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutAnakInput, TestUncheckedUpdateWithoutAnakInput>
  }

  export type TestUpdateManyWithWhereWithoutAnakInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutAnakInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    uuid?: StringFilter<"Test"> | string
    idAnak?: StringFilter<"Test"> | string
    timestamp?: DateTimeFilter<"Test"> | Date | string
    hasil?: StringNullableFilter<"Test"> | string | null
    rekomendasi?: StringNullableFilter<"Test"> | string | null
  }

  export type AnakCreateWithoutTestInput = {
    uuid?: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    user: UserCreateNestedOneWithoutAnakInput
  }

  export type AnakUncheckedCreateWithoutTestInput = {
    uuid?: string
    idUser: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
  }

  export type AnakCreateOrConnectWithoutTestInput = {
    where: AnakWhereUniqueInput
    create: XOR<AnakCreateWithoutTestInput, AnakUncheckedCreateWithoutTestInput>
  }

  export type PertanyaanCreateWithoutTestInput = {
    uuid?: string
    jawaban?: string | null
    kebenaran?: boolean
    kata: KataCreateNestedOneWithoutPertanyaanInput
  }

  export type PertanyaanUncheckedCreateWithoutTestInput = {
    uuid?: string
    kataStr: string
    jawaban?: string | null
    kebenaran?: boolean
  }

  export type PertanyaanCreateOrConnectWithoutTestInput = {
    where: PertanyaanWhereUniqueInput
    create: XOR<PertanyaanCreateWithoutTestInput, PertanyaanUncheckedCreateWithoutTestInput>
  }

  export type PertanyaanCreateManyTestInputEnvelope = {
    data: PertanyaanCreateManyTestInput | PertanyaanCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type AnakUpsertWithoutTestInput = {
    update: XOR<AnakUpdateWithoutTestInput, AnakUncheckedUpdateWithoutTestInput>
    create: XOR<AnakCreateWithoutTestInput, AnakUncheckedCreateWithoutTestInput>
    where?: AnakWhereInput
  }

  export type AnakUpdateToOneWithWhereWithoutTestInput = {
    where?: AnakWhereInput
    data: XOR<AnakUpdateWithoutTestInput, AnakUncheckedUpdateWithoutTestInput>
  }

  export type AnakUpdateWithoutTestInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    user?: UserUpdateOneRequiredWithoutAnakNestedInput
  }

  export type AnakUncheckedUpdateWithoutTestInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idUser?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
  }

  export type PertanyaanUpsertWithWhereUniqueWithoutTestInput = {
    where: PertanyaanWhereUniqueInput
    update: XOR<PertanyaanUpdateWithoutTestInput, PertanyaanUncheckedUpdateWithoutTestInput>
    create: XOR<PertanyaanCreateWithoutTestInput, PertanyaanUncheckedCreateWithoutTestInput>
  }

  export type PertanyaanUpdateWithWhereUniqueWithoutTestInput = {
    where: PertanyaanWhereUniqueInput
    data: XOR<PertanyaanUpdateWithoutTestInput, PertanyaanUncheckedUpdateWithoutTestInput>
  }

  export type PertanyaanUpdateManyWithWhereWithoutTestInput = {
    where: PertanyaanScalarWhereInput
    data: XOR<PertanyaanUpdateManyMutationInput, PertanyaanUncheckedUpdateManyWithoutTestInput>
  }

  export type PertanyaanScalarWhereInput = {
    AND?: PertanyaanScalarWhereInput | PertanyaanScalarWhereInput[]
    OR?: PertanyaanScalarWhereInput[]
    NOT?: PertanyaanScalarWhereInput | PertanyaanScalarWhereInput[]
    uuid?: StringFilter<"Pertanyaan"> | string
    idTest?: StringFilter<"Pertanyaan"> | string
    kataStr?: StringFilter<"Pertanyaan"> | string
    jawaban?: StringNullableFilter<"Pertanyaan"> | string | null
    kebenaran?: BoolFilter<"Pertanyaan"> | boolean
  }

  export type TestCreateWithoutPertanyaanInput = {
    uuid?: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
    anak: AnakCreateNestedOneWithoutTestInput
  }

  export type TestUncheckedCreateWithoutPertanyaanInput = {
    uuid?: string
    idAnak: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
  }

  export type TestCreateOrConnectWithoutPertanyaanInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutPertanyaanInput, TestUncheckedCreateWithoutPertanyaanInput>
  }

  export type KataCreateWithoutPertanyaanInput = {
    kata: string
    imgLink: string
    usia: number
  }

  export type KataUncheckedCreateWithoutPertanyaanInput = {
    kata: string
    imgLink: string
    usia: number
  }

  export type KataCreateOrConnectWithoutPertanyaanInput = {
    where: KataWhereUniqueInput
    create: XOR<KataCreateWithoutPertanyaanInput, KataUncheckedCreateWithoutPertanyaanInput>
  }

  export type TestUpsertWithoutPertanyaanInput = {
    update: XOR<TestUpdateWithoutPertanyaanInput, TestUncheckedUpdateWithoutPertanyaanInput>
    create: XOR<TestCreateWithoutPertanyaanInput, TestUncheckedCreateWithoutPertanyaanInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutPertanyaanInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutPertanyaanInput, TestUncheckedUpdateWithoutPertanyaanInput>
  }

  export type TestUpdateWithoutPertanyaanInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
    anak?: AnakUpdateOneRequiredWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutPertanyaanInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idAnak?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KataUpsertWithoutPertanyaanInput = {
    update: XOR<KataUpdateWithoutPertanyaanInput, KataUncheckedUpdateWithoutPertanyaanInput>
    create: XOR<KataCreateWithoutPertanyaanInput, KataUncheckedCreateWithoutPertanyaanInput>
    where?: KataWhereInput
  }

  export type KataUpdateToOneWithWhereWithoutPertanyaanInput = {
    where?: KataWhereInput
    data: XOR<KataUpdateWithoutPertanyaanInput, KataUncheckedUpdateWithoutPertanyaanInput>
  }

  export type KataUpdateWithoutPertanyaanInput = {
    kata?: StringFieldUpdateOperationsInput | string
    imgLink?: StringFieldUpdateOperationsInput | string
    usia?: IntFieldUpdateOperationsInput | number
  }

  export type KataUncheckedUpdateWithoutPertanyaanInput = {
    kata?: StringFieldUpdateOperationsInput | string
    imgLink?: StringFieldUpdateOperationsInput | string
    usia?: IntFieldUpdateOperationsInput | number
  }

  export type PertanyaanCreateWithoutKataInput = {
    uuid?: string
    jawaban?: string | null
    kebenaran?: boolean
    test: TestCreateNestedOneWithoutPertanyaanInput
  }

  export type PertanyaanUncheckedCreateWithoutKataInput = {
    uuid?: string
    idTest: string
    jawaban?: string | null
    kebenaran?: boolean
  }

  export type PertanyaanCreateOrConnectWithoutKataInput = {
    where: PertanyaanWhereUniqueInput
    create: XOR<PertanyaanCreateWithoutKataInput, PertanyaanUncheckedCreateWithoutKataInput>
  }

  export type PertanyaanCreateManyKataInputEnvelope = {
    data: PertanyaanCreateManyKataInput | PertanyaanCreateManyKataInput[]
    skipDuplicates?: boolean
  }

  export type PertanyaanUpsertWithWhereUniqueWithoutKataInput = {
    where: PertanyaanWhereUniqueInput
    update: XOR<PertanyaanUpdateWithoutKataInput, PertanyaanUncheckedUpdateWithoutKataInput>
    create: XOR<PertanyaanCreateWithoutKataInput, PertanyaanUncheckedCreateWithoutKataInput>
  }

  export type PertanyaanUpdateWithWhereUniqueWithoutKataInput = {
    where: PertanyaanWhereUniqueInput
    data: XOR<PertanyaanUpdateWithoutKataInput, PertanyaanUncheckedUpdateWithoutKataInput>
  }

  export type PertanyaanUpdateManyWithWhereWithoutKataInput = {
    where: PertanyaanScalarWhereInput
    data: XOR<PertanyaanUpdateManyMutationInput, PertanyaanUncheckedUpdateManyWithoutKataInput>
  }

  export type AnakCreateManyUserInput = {
    uuid?: string
    nama: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
  }

  export type AnakUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    test?: TestUpdateManyWithoutAnakNestedInput
  }

  export type AnakUncheckedUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    test?: TestUncheckedUpdateManyWithoutAnakNestedInput
  }

  export type AnakUncheckedUpdateManyWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
  }

  export type TestCreateManyAnakInput = {
    uuid?: string
    timestamp?: Date | string
    hasil?: string | null
    rekomendasi?: string | null
  }

  export type TestUpdateWithoutAnakInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: PertanyaanUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutAnakInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
    pertanyaan?: PertanyaanUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutAnakInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hasil?: NullableStringFieldUpdateOperationsInput | string | null
    rekomendasi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PertanyaanCreateManyTestInput = {
    uuid?: string
    kataStr: string
    jawaban?: string | null
    kebenaran?: boolean
  }

  export type PertanyaanUpdateWithoutTestInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
    kata?: KataUpdateOneRequiredWithoutPertanyaanNestedInput
  }

  export type PertanyaanUncheckedUpdateWithoutTestInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    kataStr?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PertanyaanUncheckedUpdateManyWithoutTestInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    kataStr?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PertanyaanCreateManyKataInput = {
    uuid?: string
    idTest: string
    jawaban?: string | null
    kebenaran?: boolean
  }

  export type PertanyaanUpdateWithoutKataInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
    test?: TestUpdateOneRequiredWithoutPertanyaanNestedInput
  }

  export type PertanyaanUncheckedUpdateWithoutKataInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idTest?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PertanyaanUncheckedUpdateManyWithoutKataInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    idTest?: StringFieldUpdateOperationsInput | string
    jawaban?: NullableStringFieldUpdateOperationsInput | string | null
    kebenaran?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnakCountOutputTypeDefaultArgs instead
     */
    export type AnakCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AnakCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCountOutputTypeDefaultArgs instead
     */
    export type TestCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KataCountOutputTypeDefaultArgs instead
     */
    export type KataCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = KataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnakDefaultArgs instead
     */
    export type AnakArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AnakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestDefaultArgs instead
     */
    export type TestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PertanyaanDefaultArgs instead
     */
    export type PertanyaanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PertanyaanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KataDefaultArgs instead
     */
    export type KataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = KataDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}