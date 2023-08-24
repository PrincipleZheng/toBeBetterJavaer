const e=JSON.parse('{"key":"v-7c790c03","path":"/thread/pianxiangsuo.html","title":"Java 15 终于把难搞的偏向锁移除了","lang":"zh-CN","frontmatter":{"title":"Java 15 终于把难搞的偏向锁移除了","shortTitle":"Java15终于把难搞的偏向锁移除了","description":"Java15终于把难搞的偏向锁移除了","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,偏向锁"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/pianxiangsuo.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java 15 终于把难搞的偏向锁移除了"}],["meta",{"property":"og:description","content":"Java15终于把难搞的偏向锁移除了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 15 终于把难搞的偏向锁移除了\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"锁的演变","slug":"锁的演变","link":"#锁的演变","children":[{"level":3,"title":"轻量级锁：CPU CAS","slug":"轻量级锁-cpu-cas","link":"#轻量级锁-cpu-cas","children":[]},{"level":3,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]}]},{"level":2,"title":"认识 Java 对象头","slug":"认识-java-对象头","link":"#认识-java-对象头","children":[]},{"level":2,"title":"认识偏向锁","slug":"认识偏向锁","link":"#认识偏向锁","children":[{"level":3,"title":"场景1","slug":"场景1","link":"#场景1","children":[]},{"level":3,"title":"场景2","slug":"场景2","link":"#场景2","children":[]},{"level":3,"title":"场景3","slug":"场景3","link":"#场景3","children":[]},{"level":3,"title":"偏向撤销","slug":"偏向撤销","link":"#偏向撤销","children":[]},{"level":3,"title":"HashCode 哪去了","slug":"hashcode-哪去了","link":"#hashcode-哪去了","children":[]}]},{"level":2,"title":"告别偏向锁","slug":"告别偏向锁","link":"#告别偏向锁","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"灵魂追问","slug":"灵魂追问","link":"#灵魂追问","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1663295000000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":5},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":19.26,"words":5777},"filePathRelative":"thread/pianxiangsuo.md","localizedDate":"2022年9月16日","excerpt":"<h2> 背景</h2>\\n<p>在 JDK1.5 之前，面对 Java 并发问题， synchronized 是一招鲜的解决方案：</p>\\n<ol>\\n<li>普通同步方法，锁上当前实例对象</li>\\n<li>静态同步方法，锁上当前类 Class 对象</li>\\n<li>同步块，锁上括号里面配置的对象</li>\\n</ol>\\n<p>拿同步块来举例:</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>public void test(){\\n  synchronized (object) {\\n    i++;\\n  }\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};