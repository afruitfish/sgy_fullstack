数据库索引
    普通索引 create index idx_name on tablename(column);
    联合索引 create index idx_name2 on tablename(col1,col2);
    唯一索引 create unique index uniq_name on xxx;
    创建主键 alter table tablename add primary key(col);
    删除索引 drop index idx_name on tablename;

常见的索引结构
    1. 二叉搜索树：
    2. 有序序列：
    3. 哈希表：

mysql索引
    innodb
    myisam

B树和B+树
    1. B+树只有叶子节点会存放数据，B树每个节点都会存放
    2. B+树的叶子节点都会通过链表连接，能够很快的实现区间查询
    3. B树可以在非叶子节点结束查找，最好的情况是O(1)，但B+树的时间复杂度是O(logN)
    4. B树插入性能比B+树药膏
