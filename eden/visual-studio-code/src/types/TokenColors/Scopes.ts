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
  | 'constant.regexp'
  | 'constant.rgb-value';

type EmphasisScopes = 'emphasis';

type EntityScopes =
  | 'entity'
  | 'entity.name'
  | 'entity.name.class'
  | 'entity.name.function'
  | 'entity.name.method'
  | 'entity.name.section'
  | 'entity.name.selector'
  | 'entity.name.tag'
  | 'entity.name.type'
  | 'entity.other'
  | 'entity.other.attribute-name'
  | 'entity.other.inherited-class';

type InvalidScopes = 'invalid' | 'invalid.deprecated' | 'invalid.illegal';

type KeywordScopes =
  | 'keyword.control'
  | 'keyword.operator'
  | 'keyword.operator.arithmetic'
  | 'keyword.operator.assignment'
  | 'keyword.operator.logical'
  | 'keyword.operator.new'
  | 'keyword.other';

type MarkupScopes =
  | 'markup'
  | 'markup.bold'
  | 'markup.changed'
  | 'markup.deleted'
  | 'markup.heading'
  | 'markup.inline.raw'
  | 'markup.inserted'
  | 'markup.italic'
  | 'markup.list'
  | 'markup.list.numbered'
  | 'markup.list.unnumbered'
  | 'markup.other'
  | 'markup.quote'
  | 'markup.raw'
  | 'markup.underline'
  | 'markup.underline.link';

type MetaScopes =
  | 'meta'
  | 'meta.block'
  | 'meta.cast'
  | 'meta.class'
  | 'meta.function'
  | 'meta.function-call'
  | 'meta.preprocessor'
  | 'meta.return-type'
  | 'meta.selector'
  | 'meta.tag'
  | 'meta.type'
  | 'meta.type.annotation';

type PunctuationScopes =
  | 'punctuation.definition.string.begin'
  | 'punctuation.definition.string.end'
  | 'punctuation.separator'
  | 'punctuation.separator.continuation'
  | 'punctuation.terminator';

type StorageScopes = 'storage' | 'storage.modifier' | 'storage.type';

type StringScopes =
  | 'string'
  | 'string.interpolated'
  | 'string.other'
  | 'string.quoted'
  | 'string.quoted.double'
  | 'string.quoted.other'
  | 'string.quoted.single'
  | 'string.quoted.triple'
  | 'string.regexp'
  | 'string.unquoted';

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
  | 'variable.other.readwrite'
  | 'variable.parameter';

export type Scopes =
  | CommentScopes
  | ConstantScopes
  | EmphasisScopes
  | EntityScopes
  | InvalidScopes
  | KeywordScopes
  | MarkupScopes
  | MetaScopes
  | PunctuationScopes
  | StorageScopes
  | StringScopes
  | StrongScopes
  | SupportScopes
  | VariableScopes;
