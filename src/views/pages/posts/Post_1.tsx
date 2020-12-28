import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { CodeBlock, TableCellBlock, InlineCodeBlock, BlockQuoteBlock } from '@views/organisms';
import './Post.css'
import Utterances from '@views/templates/Utterances';


function Post_1() {
    const data = `
         

## TEST2 입니다.

> 이건 테스트에요

1. 안녕하세요.
2. 테스트2
3. 입니다.

    `
	return (
		<div style={{width:"100%", flex:1, display:"flex", flexDirection: 'column'}}>
		<ReactMarkdown
			plugins={[gfm]}
			source={data}
			renderers={{
				code: CodeBlock,
				tableCell: TableCellBlock,
				inlineCode: InlineCodeBlock,
				blockquote: BlockQuoteBlock,
			}}
		/>
		<Utterances repo="xenossys/blogIssue" />
		</div>
	);
    
}

export default Post_1;