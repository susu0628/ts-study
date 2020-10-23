function helloWorld () {
  let web: string = "hello world";
  console.log(web)
}
helloWorld()
/**
 * Tips:
 * 什么是ts？
 *   TS和JS之间的关系其实就是Less/Sass和CSS之间的关系
 *   就像Less/Sass是对CSS进行扩展一样, TS也是对JS进行扩展
 *   就像Less/Sass最终会转换成CSS一样, 我们编写好的TS代码最终也会换成JS

 * 为什么需要ts？
 *   因为JavaScript是弱类型, 很多错误只有在运行时才会被发现
 *   而TypeScript是强类型, 它提供了一套静态检测机制,如果我们编码中途变换变量的类型，ts就会在报错，帮助我们在编码时发现错误。

 * ts有何特点？
 *   支持最新的JavaScript新特特性
 *   支持代码静态检查
 *   支持诸如C,C++,Java,Go等后端语言中的特性 (枚举、泛型、类型转换、命名空间、声明文件、类、接口等)

 * 需全局安装typescript cnpm insstall typescript -g
 * node 不能直接运行TypeScript文件，所以需下载一个插件 ts-node  全局安装 cnpm install ts-node -g
 * 此时，直接运行 ts-node Demo01.ts
 */