type CarriageScopes = 'carriage-return';

type CommentScopes = 'comment' | 'comment.block' | 'comment.block.documentation' | 'comment.line';

type ConstantScopes =
  | 'constant'
  | 'constant.character'
  | 'constant.character.escape'
  | 'constant.numeric'
  | 'constant.numeric.float'
  | 'constant.numeric.hex'
  | 'constant.numeric.integer'
  | 'constant.numeric.octal'
  | 'constant.other'
  | 'constant.other.reference.link'
  | 'constant.regexp'
  | 'constant.rgb-value';

type EmphasisScopes = 'emphasis';

type EntityScopes =
  | 'entity'
  | 'entity.name'
  | 'entity.name.class'
  | 'entity.name.constant'
  | 'entity.name.function'
  | 'entity.name.method'
  | 'entity.name.section'
  | 'entity.name.selector'
  | 'entity.name.tag'
  | 'entity.name.type'
  | 'entity.other'
  | 'entity.other.attribute-name'
  | 'entity.other.inherited-class';

type InvalidScopes =
  | 'invalid'
  | 'invalid.broken'
  | 'invalid.deprecated'
  | 'invalid.illegal'
  | 'invalid.unimplemented';

type KeywordScopes =
  | 'keyword'
  | 'keyword.control'
  | 'keyword.operator'
  | 'keyword.operator.arithmetic'
  | 'keyword.operator.assignment'
  | 'keyword.operator.logical'
  | 'keyword.operator.new'
  | 'keyword.other'
  | 'keyword.other.important';

type MarkupScopes =
  | 'markup'
  | 'markup.bold'
  | 'markup.changed'
  | 'markup.deleted'
  | 'markup.heading'
  | 'markup.heading entity.name'
  | 'markup.ignored'
  | 'markup.inline.raw'
  | 'markup.inserted'
  | 'markup.italic'
  | 'markup.list'
  | 'markup.list.numbered'
  | 'markup.list.unnumbered'
  | 'markup.other'
  | 'markup.quote'
  | 'markup.raw'
  | 'markup.strikethrough'
  | 'markup.underline'
  | 'markup.underline.link'
  | 'markup.untracked';

type MessageScopes = 'message.error';

type MetaScopes =
  | 'meta'
  | 'meta.block'
  | 'meta.cast'
  | 'meta.class'
  | 'meta.diff.header'
  | 'meta.diff.header.from-file'
  | 'meta.diff.header.to-file'
  | 'meta.diff.range'
  | 'meta.function'
  | 'meta.function-call'
  | 'meta.module-reference'
  | 'meta.output'
  | 'meta.preprocessor'
  | 'meta.property-name'
  | 'meta.return-type'
  | 'meta.selector'
  | 'meta.separator'
  | 'meta.tag'
  | 'meta.type'
  | 'meta.type.annotation';

type PunctuationScopes =
  | 'punctuation.definition.comment'
  | 'punctuation.definition.changed'
  | 'punctuation.definition.deleted'
  | 'punctuation.definition.inserted'
  | 'punctuation.definition.string'
  | 'punctuation.definition.string.begin'
  | 'punctuation.definition.string.end'
  | 'punctuation.definition.list.begin.markdown'
  | 'punctuation.separator'
  | 'punctuation.separator.continuation'
  | 'punctuation.terminator';

type SourceScopes = 'source.regexp';

type StorageScopes =
  | 'storage'
  | 'storage.modifier'
  | 'storage.modifier.package'
  | 'storage.modifier.import'
  | 'storage.type'
  | 'storage.type.java';

type StringScopes =
  | 'string'
  | 'string.comment'
  | 'string.interpolated'
  | 'string.other'
  | 'string.other.link'
  | 'string.quoted'
  | 'string.quoted.double'
  | 'string.quoted.other'
  | 'string.quoted.single'
  | 'string.quoted.triple'
  | 'string.regexp'
  | 'string.regexp.character-class'
  | 'string.regexp constant.character.escape'
  | 'string.regexp source.ruby.embedded'
  | 'string.regexp string.regexp.arbitrary-repitition'
  | 'string.unquoted'
  | 'string punctuation.section.embedded source'
  | 'string variable';

type StrongScopes = 'strong';

type SupportScopes =
  | 'support'
  | 'support.class'
  | 'support.constant'
  | 'support.function'
  | 'support.other'
  | 'support.type'
  | 'support.type.property-name'
  | 'support.variable';

type VariableScopes =
  | 'variable'
  | 'variable.language'
  | 'variable.name'
  | 'variable.other'
  | 'variable.other.constant'
  | 'variable.other.enummember'
  | 'variable.other.object'
  | 'variable.other.readwrite'
  | 'variable.parameter'
  | 'variable.parameter.function';

export type Scopes =
  | CarriageScopes
  | CommentScopes
  | ConstantScopes
  | EmphasisScopes
  | EntityScopes
  | InvalidScopes
  | KeywordScopes
  | MarkupScopes
  | MessageScopes
  | MetaScopes
  | PunctuationScopes
  | SourceScopes
  | StorageScopes
  | StringScopes
  | StrongScopes
  | SupportScopes
  | VariableScopes;
