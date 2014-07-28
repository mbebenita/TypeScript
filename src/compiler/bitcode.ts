/// <reference path="types.ts"/>
/// <reference path="core.ts"/>
/// <reference path="scanner.ts"/>
/// <reference path="parser.ts"/>

module ts {
    function emitLines(nodes: Node[]) {
        for (var i = 0, n = nodes.length; i < n; i++) {
            emitNode(nodes[i]);
        }
    }

    function emitSourceFile(node: SourceFile) {
        emitLines(node.statements);
    }

    function emitFunctionDeclaration(node: FunctionDeclaration) {
        // console.info(node);
    }

    function emitNode(node: Node) {
        switch (node.kind) {
            case SyntaxKind.Constructor:
            case SyntaxKind.FunctionDeclaration:
            case SyntaxKind.Method:
                return emitFunctionDeclaration(<FunctionDeclaration>node);
            case SyntaxKind.SourceFile:
                return emitSourceFile(<SourceFile>node);
        }
    }
    export function emitBitcodeFile(llFilePath: string, sourceFile?: SourceFile) {
        emitNode(sourceFile);
    }
}
