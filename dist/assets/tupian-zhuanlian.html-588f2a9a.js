import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as n,d as a,b as t,e as s}from"./app-72970f25.js";const l={},u=s(`<p>作为一名技术博主，经常需要把同一份 MD 文件同步到不同的博客平台，以求获得更多的曝光，从而帮助到更多的小伙伴——瞧我这“达则兼济天下”的雄心壮志。像 CSDN 和掘金这两个博客平台都有自己的外链图片解析功能。</p><p>当我把 MD 源文档复制到 CSDN 或者掘金的编辑器中，它们会自动地帮我把外链转成内链，这样我就不用再重新上传图片，也不需要配置自己的图床了，否则图片会因为防盗链的原因显示不出来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>举个例子，现在有这样一段 MD 文档，里面有一张图片。

![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-1.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面的 MD 文档复制到掘金编辑器的时候，就会出现「图片解析中...」！但会一直卡在这里，再也解析不下去了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是因为图片加了防盗链，掘金这么牛逼的社区在解析的时候也会失败。CSDN 的转链功能更牛逼一点，基本上可以无视防盗链。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还有一些博客平台是没有转链功能的，比如说二哥的静态小破站《二哥的Java进阶之路》。怎么办呢？我一开始的解决方案是：</p><ul><li>先将图片手动一张张下载到本地</li><li>再将本地图片上传到 GitHub 指定的仓库</li><li>修改 MD 文档中的图片链接，使用 CDN 加速服务</li></ul><p>这样就能解决问题，但是需要手动去做这些重复的动作，尤其遇到一篇文章有二三十张图片的时候就很烦。这有点丧失我作为程序员的尊严啊！</p><p>首先要解决的是图片下载的问题，可以利用爬虫技术：爬虫爬得早，局子进的早。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="二、关于-java-爬虫" tabindex="-1"><a class="header-anchor" href="#二、关于-java-爬虫" aria-hidden="true">#</a> 二、关于 Java 爬虫</h3><p>Java 爬虫的类库非常多，比如说 crawler4j，我个人更喜欢 jsoup，它更轻量级。jsoup 是一款用于解析 HTML 的 Java 类库，提供了一套非常便捷的 API，用于提取和操作数据。</p>`,14),r={href:"https://jsoup.org/",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>jsoup 目前在 GitHub 上已经收获 9.3k+ 的 star，可以说是非常的受欢迎了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>jsoup 有以下特性：</p><ul><li>可以从 URL、文件或者字符串中抓取和解析</li><li>可以使用 DOM 遍历或者 CSS 选择器查找和提取数据</li><li>可以操作 HTML 元素、属性和文本</li><li>可以输出整洁的 HTML</li></ul><h3 id="三、实战-jsoup" tabindex="-1"><a class="header-anchor" href="#三、实战-jsoup" aria-hidden="true">#</a> 三、实战 jsoup</h3><p><strong>第一步，添加 jsoup 依赖到项目中</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;!-- jsoup HTML parser library @ https://jsoup.org/ --&gt;
  &lt;groupId&gt;org.jsoup&lt;/groupId&gt;
  &lt;artifactId&gt;jsoup&lt;/artifactId&gt;
  &lt;version&gt;1.14.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步， 获取网页文档</strong>。</p>`,8),g={href:"https://mp.weixin.qq.com/s/NtOD5q95xPEs4aQpu4lGcg",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token class-name">Jsoup</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;https://blog.csdn.net/qing_gee/article/details/122407829&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> title <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Jsoup 类是 jsoup 的入口类，通过 connect 方法可以从指定链接中加载 HTML 文档（用 Document 对象来表示）。</p><p><strong>第三步，获取图片节点</strong>。</p><p>再通过以下代码可以获取文章所有的图片节点：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Elements</span> images <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&quot;.article_content img[src~=(?i)\\\\.(png|jpe?g|gif)]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> image <span class="token operator">:</span> images<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;src : &quot;</span> <span class="token operator">+</span> image<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结构如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="四、下载图片" tabindex="-1"><a class="header-anchor" href="#四、下载图片" aria-hidden="true">#</a> 四、下载图片</h3><p>拿到图片的 URL 地址后，事情就好办了，可以直接通过 JDK 的原生 API 下载图片到指定文件夹。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> downloadPath <span class="token operator">=</span> <span class="token string">&quot;/tobebetterjavaer-beian-&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> image <span class="token operator">:</span> images<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">openStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>downloadPath <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">2048</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>length <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想加快节奏的话，可以把上面的代码封装一下，然后开个多线程，简单点的话，可以每张图片起一个线程，速度杠杠的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span>originImgUrl<span class="token punctuation">,</span> destinationImgPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="五、使用-cdn-加速图片" tabindex="-1"><a class="header-anchor" href="#五、使用-cdn-加速图片" aria-hidden="true">#</a> 五、使用 CDN 加速图片</h3><p>图片下载到本地后，接下来的工作就更简单了，读取原 MD 文档，修改图片链接，使用 CDN 进行加速。我的图床采用的是 GitHub+jsDelivr CDN 的方式，不过由于 jsDelivr 的国内节点逐渐撤离了，图片在某些网络环境下访问的时候还是有点慢，后面打算用 OSS+CDN 的方式，更靠谱一点。</p><p>读取文件可以借助一下 hutool 这款 GitHub 上开源的工具类库，省去很多繁琐的 IO 操作。</p>`,15),v={href:"https://hutool.cn/",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>第一步，将 hutool 添加到 pom.xml 文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;cn.hutool&lt;/groupId&gt;
    &lt;artifactId&gt;hutool-all&lt;/artifactId&gt;
    &lt;version&gt;5.7.20&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，按照行读取 MD 文件，需要用到 hutool 的 FileReader 类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token class-name">FileReader</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>docPath <span class="token operator">+</span>fileName<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">readLines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，通过正则表达式来匹配是否有需要替换的图片标签，MD 中的图片标记关键字为 <code>![]()</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-7.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果匹配到，就替换为 jsDelivr CDN 链接的地址，写文件时需要用到 hutool 的FileWriter 类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FileWriter writer = new FileWriter(docPath + fileName);
for (String line : list) {
    Matcher m = pattern.matcher(line);
    if (m.matches()) {
        writer.append(&quot;![](&quot; + imgCdnPre +  num + imgSuffix +&quot;)\\n&quot;);
    } else {
        writer.append(line+&quot;\\n&quot;);
   }
}
writer.flush();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此为止，整个代码的编写工作就告一段落了。很简单，两个类库，几行代码就搞定了！</p><p>转换前的 MD 文件如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>运行代码转换后，发现图片地址已经变成 jsDelivr CDN 图库了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用 GitHub 桌面版把图片和 MD 文档提交到 GitHub 仓库后，就可以看到图片已经加载完成可以访问了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="六、一点小心得" tabindex="-1"><a class="header-anchor" href="#六、一点小心得" aria-hidden="true">#</a> 六、一点小心得</h3><p>不得不说，懂点技术，还是非常爽的。撸了几行代码，解放了双手，可以干点正经事了（狗头）。</p><p>这不，重新把《二哥的Java进阶之路》的小破站整理排版了一下，新增了不少优质的内容。学习 Java 的小伙伴可以开卷了，有需要增加的内容也欢迎提交 issue 啊！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tupian-zhuanlian-11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再次感谢各位小伙伴的厚爱，我也会一如既往地完善这个专栏，我们下期见~</p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png">`,21);function b(h,f){const e=i("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[a("官网地址："),n("a",r,[a("https://jsoup.org/"),t(e)])])]),d,n("p",null,[a("就拿二哥之前发表的一篇文章《"),n("a",g,[a("二哥的小破站终于上线了，颜值贼高"),t(e)]),a("》来举例吧。通过以下代码就可以拿到网页文档了。")]),k,n("blockquote",null,[n("p",null,[a("官网："),n("a",v,[a("https://hutool.cn/"),t(e)])])]),m])}const y=p(l,[["render",b],["__file","tupian-zhuanlian.html.vue"]]);export{y as default};