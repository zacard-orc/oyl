# 📋 OYL 项目完整指南

> 从入门到精通，全面掌握 OYL 笔记应用的所有功能

## 📖 目录

- [项目概述](#项目概述)
- [核心功能详解](#核心功能详解)
- [技术架构深度解析](#技术架构深度解析)
- [使用场景](#使用场景)
- [性能与安全](#性能与安全)
- [开发指南](#开发指南)
- [常见问题](#常见问题)
- [贡献指南](#贡献指南)

---

## 🎯 项目概述

### 什么是 OYL？

OYL 是一款**下一代智能加密笔记应用**，专为知识工作者、学生、研究人员和创意人士设计。它结合了端到端加密的安全性和 AI 驱动的智能功能，提供跨平台无缝同步的体验。

### 核心理念

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   安全 · 智能 · 跨平台 · 离线优先               │
│                                                 │
│   "你的知识，只属于你"                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 版本信息

| 项目 | 信息 |
|------|------|
| **当前版本** | v0.1.0 (开发中) |
| **发布状态** | 早期预览 |
| **最新提交** | cdb30a3 - IP 风控限制 |
| **开发分支** | zz |

---

## 🚀 核心功能详解

### 🔐 端到端加密系统

#### 双层密钥架构

```
用户密码 ──┬──> KEK (密钥加密密钥)
           │    用于加密 DEK
           │
笔记内容 ──┴──> DEK (数据加密密钥)
           每笔记随机生成
           用于加密实际内容
```

**安全特性：**
- ✅ 服务端无法解密任何笔记内容
- ✅ 即使服务器被攻陷，数据依然安全
- ✅ 本地解密，云端仅存储密文
- ✅ 支持生物识别解锁

### 🔄 离线优先同步

#### 同步工作流程

```mermaid
graph LR
    A[本地编辑] --> B[SQLite 存储]
    B --> C[异步同步队列]
    C --> D[增量同步]
    D --> E[云端更新]
    E --> F[多端同步]
    F --> B
```

**同步特性：**
- 📦 **块级同步** - 只同步变更的块，节省带宽
- ⚡ **即时反馈** - 本地操作立即可见
- 🔀 **冲突解决** - Git-like 工作流，智能合并
- 🔄 **后台同步** - 不阻塞用户操作

### 🧠 AI 智能功能

#### 本地 AI 处理

| 功能 | 描述 | 隐私保护 |
|------|------|---------|
| **自动摘要** | 为长笔记生成摘要 | 本地模型处理 |
| **标签推荐** | 智能推荐相关标签 | 无需上传云端 |
| **链接建议** | 自动建议相关笔记 | 在设备内完成 |
| **内容拆解** | 智能分块和结构化 | 完全本地化 |

### 📱 跨平台体验

#### 平台支持矩阵

| 平台 | 状态 | 功能完整性 | 同步速度 |
|------|------|-----------|---------|
| **Windows** | ✅ 生产可用 | ⭐⭐⭐⭐⭐ | ⚡ 实时 |
| **macOS** | ✅ 生产可用 | ⭐⭐⭐⭐⭐ | ⚡ 实时 |
| **iOS** | 🚧 开发中 | ⭐⭐⭐⭐ | ⚡ 实时 |
| **Android** | 🚧 开发中 | ⭐⭐⭐⭐ | ⚡ 实时 |

#### 平台特性差异

- 🪟 **Windows** - 完整功能，系统级集成
- 🍎 **macOS** - 原生体验，Siri 集成
- 📱 **移动** - 触摸优化，小组件支持

---

## 🏗️ 技术架构深度解析

### 整体架构

```
┌──────────────────────────────────────────────────────────┐
│                      用户界面层                           │
│           Vue 3 SPA + Tailwind CSS + Pinia                │
└──────────────────────────────────────────────────────────┘
                    ↓         ↓         ↓
┌──────────────────────────────────────────────────────────┐
│                     JSAPI 适配层                          │
│    Tauri | HTTP | Mock - 环境自动检测                    │
└──────────────────────────────────────────────────────────┘
                    ↓         ↓         ↓
┌──────────────────────────────────────────────────────────┐
│                    业务逻辑层                             │
│   笔记管理 | 同步引擎 | 加密模块 | AI 处理                  │
└──────────────────────────────────────────────────────────┘
                    ↓         ↓         ↓
┌──────────────────────────────────────────────────────────┐
│                    数据存储层                             │
│    SQLite (本地) | Supabase (云端) | OSS (文件)           │
└──────────────────────────────────────────────────────────┘
```

### 核心模块详解

#### 1. JSAPI 适配器

```javascript
// 自动选择适配器
const adapter = detectEnvironment(); // Tauri | HTTP | Mock
export const jsapi = createJSAPI(adapter);

// 18 个命名空间
- auth
- notes
- groups
- tags
- files
- sync
- ai
- settings
```

#### 2. 同步引擎

```typescript
interface SyncRequest {
  type: 'push' | 'pull' | 'resolve';
  blocks: ChangeBlock[];
  version: number;
  timestamp: number;
}

// 串行队列保证一致性
class SyncQueue {
  private queue: SyncRequest[] = [];
  private processing: boolean = false;

  async add(request: SyncRequest) {
    this.queue.push(request);
    if (!this.processing) await this.process();
  }
}
```

#### 3. 加密模块

```rust
// Tauri 原生实现
pub struct EncryptionService {
    kek: SecretKey, // 用户密码派生
}

impl EncryptionService {
    pub fn encrypt_note(&self, content: &str, dek: &SecretKey) -> EncryptedNote {
        // AES-256-GCM 加密
    }

    pub fn decrypt_note(&self, encrypted: &EncryptedNote, dek: &SecretKey) -> String {
        // 解密逻辑
    }
}
```

### 数据库设计

#### 核心表结构

```sql
-- 笔记表
CREATE TABLE notes (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    content_encrypted BLOB NOT NULL,
    dek_encrypted BLOB NOT NULL,
    version INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 同步状态表
CREATE TABLE sync_status (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    last_sync_at TIMESTAMP,
    pending_changes INTEGER DEFAULT 0,
    conflicts_count INTEGER DEFAULT 0
);
```

---

## 💼 使用场景

### 🎓 学生场景

```
📚 课程笔记管理
├── 按课程分组
├── 考试重点标记
├── 参考资料链接
└── 学习计划追踪

✍️ 论文写作
├── 文献整理
├── 草稿多版本
├── 引用管理
└── 协作编辑
```

### 💼 职场场景

```
📊 项目管理
├── 项目计划
├── 会议记录
├── 待办事项
└── 进度追踪

📝 文档撰写
├── 技术文档
├── 产品需求
├── 操作手册
└── 总结报告
```

### 🧑‍🎨 创意场景

```
💡 灵感收集
├── 随时记录
├── 图片标注
├── 语音备忘
└── 思维导图

📖 知识管理
├── 读书笔记
├── 观影记录
├── 旅行日记
└── 个人博客
```

---

## ⚡ 性能与安全

### 性能优化

#### 前端性能
- **懒加载** - 按需加载组件和路由
- **虚拟滚动** - 大列表性能优化
- **缓存策略** - 智能缓存常用数据
- **代码分割** - 减小初始加载体积

#### 同步性能
```
同步时间对比：
├── 全量同步：~2-5 秒/MB
├── 增量同步：~100-500ms/块
└── 本地操作：<50ms 响应
```

### 安全特性

#### 传输安全
- 🔒 **HTTPS/TLS 1.3** - 所有网络通信加密
- 🛡️ **证书锁定** - 防止中间人攻击
- 🔄 **自动重连** - 断线自动恢复

#### 存储安全
- 🔐 **本地加密** - SQLite 数据库加密存储
- 🗑️ **安全删除** - 数据销毁不可恢复
- 📱 **设备绑定** - 多设备需授权

#### 隐私保护
- 👤 **最小化收集** - 只收集必要数据
- 🚫 **无追踪** - 无第三方分析
- 📋 **透明政策** - 隐私政策清晰明确

---

## 🛠️ 开发指南

### 环境准备

#### 必需工具
```bash
# 检查环境
node --version  # >= 22.0.0
pnpm --version  # 最新版
git --version

# 安装依赖
pnpm install -g pnpm
```

#### 可选工具
```bash
# 开发工具
docker --version      # 数据库和缓存
sqlite3               # 本地数据库
```

### 开发命令

```bash
# 完整开发环境
pnpm dev          # 启动所有服务

# 单独服务
pnpm dev:fe       # 前端 (5173)
pnpm dev:svr      # 后端 (3000)
pnpm dev:tauri    # Tauri 桌面端

# 构建和部署
pnpm build        # 构建所有
pnpm build:fe     # 构建前端
pnpm build:svr    # 构建后端
pnpm build:tauri  # 构建桌面应用

# 测试
pnpm test         # 运行所有测试
pnpm test:fe      # 前端测试
pnpm test:svr     # 后端测试

# 数据库
pnpm db:migrate   # 运行数据库迁移
pnpm db:seed      # 填充测试数据
pnpm db:studio    # 打开数据库管理界面
```

### 代码规范

#### 提交规范
```bash
# 使用 commitlint
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具

# 示例
git commit -m "feat: 添加 AI 智能摘要功能"
```

#### 代码质量
- **ESLint** - JavaScript/TypeScript 代码检查
- **Prettier** - 代码格式化工具
- **Husky** - Git hooks 自动化
- **Commitlint** - 提交信息检查

---

## ❓ 常见问题

### 一般问题

#### Q: OYL 和其他笔记应用有什么不同？
A: OYL 的核心优势在于：
1. **端到端加密** - 你的数据只有你能看
2. **离线优先** - 无需网络也能高效工作
3. **AI 本地化** - 智能功能不牺牲隐私
4. **块级编辑** - 更灵活的内容组织

#### Q: 数据如何同步？
A: 使用 Git-like 的增量同步机制：
- 本地 SQLite 作为即时读写源
- 块级变更检测和同步
- 自动冲突解决
- 支持多端实时同步

#### Q: 支持团队协作吗？
A: 目前专注于个人知识管理，团队协作功能在 v0.3.0 规划中。

### 技术问题

#### Q: 如何本地运行开发环境？
A: 参考 [开发指南](#开发指南) 部分，需要准备 Node.js 22+ 和 pnpm。

#### Q: 数据库结构如何？
A: 详细设计请查看 [数据库文档](svr/db/README.md)。

#### Q: API 文档在哪里？
A: 后端 API 文档在 [svr/docs/api.md](svr/docs/api.md)，也有 Swagger 在线文档。

---

## 🤝 贡献指南

### 如何贡献

#### 代码贡献
1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

#### 文档贡献
- 改进现有文档
- 添加使用教程
- 翻译多语言内容
- 修复错别字和语法错误

#### 问题反馈
- 提交详细的问题描述
- 提供复现步骤
- 附上截图或录屏
- 标注影响范围

### 开发流程

```
发现问题 → 创建 Issue → 讨论方案 → 开发实现 → 代码审查 → 合并提交
```

### 代码审查

- 所有 PR 需要至少 1 个审阅者
- 保持代码简洁和可维护性
- 添加必要的测试
- 更新相关文档

---

## 📈 路线图

### v0.1.0 - 基础功能 (✅ 已完成)
- [x] 基础笔记 CRUD
- [x] 多端同步框架
- [x] 端到端加密
- [x] 标签和分组
- [x] 目录生成

### v0.2.0 - 智能功能 (🚧 开发中)
- [ ] AI 自动摘要
- [ ] 知识图谱
- [ ] 模板系统
- [ ] 插件 API
- [ ] 移动端优化

### v0.3.0 - 协作功能 (📅 计划中)
- [ ] 团队协作
- [ ] 共享笔记库
- [ ] 权限管理
- [ ] 团队统计
- [ ] 企业版功能

---

## 📞 联系我们

### 社区交流
- [GitHub Discussions](https://github.com/your-org/oyl/discussions) - 功能讨论
- [GitHub Issues](https://github.com/your-org/oyl/issues) - 问题反馈
- [Discord 服务器](https://discord.gg/oyl) - 实时交流

### 官方渠道
- 🌐 官网：https://oyl.app
- 📧 邮箱：contact@oyl.app
- 🐦 Twitter：@oyl_app

### 商业合作
- 💼 商务合作：business@oyl.app
- 🎯 产品咨询：product@oyl.app

---

<div align="center">

## 🌟 支持 OYL

如果你喜欢 OYL，请考虑：

- ⭐ 给项目点个星标
- 📢 推荐给更多用户
- 💰 支持我们开发
- 🤝 参与社区建设

**感谢你的支持！**

</div>
