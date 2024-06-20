import { TreeSearchProps } from './TreeSearch.vue';
import { TreeNode } from '../store';
import { placementEnum } from '../constants';
import { TreeNodeKeyType, PlacementType } from '../types';
export type TreeDropProps = TreeSearchProps & {
    /** 下拉内容高度 */
    dropHeight?: number;
    /** 展示输入框 placeholder */
    dropPlaceholder?: string;
    /** 是否禁用 */
    dropDisabled?: boolean;
    /** 允许清空 */
    clearable?: boolean;
    /** 下拉弹出框位置 */
    placement?: PlacementType;
    /** 将下拉 DOM 转移到 body 中 */
    transfer?: boolean;
    /** 在下拉框容器上额外添加的 class */
    dropdownClassName?: string | string[];
    /** 下拉框容器最小宽度，未指定则默认为展示输入框宽度 */
    dropdownMinWidth?: number;
    /** 固定下拉框容器宽度，当内容超出最小宽度不会伸长，而是出现横向滚动条 */
    dropdownWidthFixed?: boolean;
};
export declare const DEFAULT_TREE_DROP_PROPS: {
    dropHeight: number;
    dropDisabled: boolean;
    clearable: boolean;
    placement: placementEnum;
    transfer: boolean;
    dropdownWidthFixed: boolean;
    searchPlaceholder: string;
    showCheckAll: boolean;
    showCheckedButton: boolean;
    checkedButtonText: string;
    showFooter: boolean;
    searchLength: number;
    searchDisabled: boolean;
    searchRemote: boolean;
    searchDebounceTime: number;
    data: () => never[];
    unloadDataList: () => never[];
    showUnloadCheckedNodes: boolean;
    emptyText: string;
    titleField: string;
    keyField: string;
    separator: string;
    checkable: boolean;
    selectable: boolean;
    filteredNodeCheckable: boolean;
    cascade: boolean;
    enableLeafOnly: boolean;
    disableAll: boolean;
    defaultExpandAll: boolean;
    defaultExpandedKeys: () => never[];
    expandedKeys: () => never[];
    draggable: boolean;
    droppable: boolean;
    beforeDropMethod: () => () => boolean;
    ignoreMode: import("../constants").ignoreEnum;
    autoLoad: boolean;
    expandOnFilter: boolean;
    unselectOnClick: boolean;
    loading: boolean;
    nodeMinHeight: number;
    nodeIndent: number;
    renderNodeAmount: number;
    bufferNodeAmount: number;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<TreeDropProps>, {
    dropHeight: number;
    dropDisabled: boolean;
    clearable: boolean;
    placement: placementEnum;
    transfer: boolean;
    dropdownWidthFixed: boolean;
    searchPlaceholder: string;
    showCheckAll: boolean;
    showCheckedButton: boolean;
    checkedButtonText: string;
    showFooter: boolean;
    searchLength: number;
    searchDisabled: boolean;
    searchRemote: boolean;
    searchDebounceTime: number;
    data: () => never[];
    unloadDataList: () => never[];
    showUnloadCheckedNodes: boolean;
    emptyText: string;
    titleField: string;
    keyField: string;
    separator: string;
    checkable: boolean;
    selectable: boolean;
    filteredNodeCheckable: boolean;
    cascade: boolean;
    enableLeafOnly: boolean;
    disableAll: boolean;
    defaultExpandAll: boolean;
    defaultExpandedKeys: () => never[];
    expandedKeys: () => never[];
    draggable: boolean;
    droppable: boolean;
    beforeDropMethod: () => () => boolean;
    ignoreMode: import("../constants").ignoreEnum;
    autoLoad: boolean;
    expandOnFilter: boolean;
    unselectOnClick: boolean;
    loading: boolean;
    nodeMinHeight: number;
    nodeIndent: number;
    renderNodeAmount: number;
    bufferNodeAmount: number;
}>, {
    setData: (data: import("../types").AnyPropsArrayType) => void;
    setChecked: (key: TreeNodeKeyType, value: boolean) => void;
    setCheckedKeys: (keys: TreeNodeKeyType[], value: boolean) => void;
    checkAll: () => void;
    clearChecked: () => void;
    setSelected: (key: TreeNodeKeyType, value: boolean) => void;
    clearSelected: () => void;
    setExpand: (key: TreeNodeKeyType, value: boolean, expandParent?: boolean) => void;
    setExpandKeys: (keys: TreeNodeKeyType[], value: boolean) => void;
    setExpandAll: (value: boolean) => void;
    getCheckedNodes: (ignoreMode?: "none" | "parents" | "children" | undefined) => TreeNode[];
    getCheckedKeys: (ignoreMode?: "none" | "parents" | "children" | undefined) => TreeNodeKeyType[];
    getIndeterminateNodes: () => TreeNode[];
    getSelectedNode: () => TreeNode | null;
    getSelectedKey: () => TreeNodeKeyType | null;
    getExpandNodes: () => TreeNode[];
    getExpandKeys: () => TreeNodeKeyType[];
    getCurrentVisibleNodes: () => TreeNode[];
    getNode: (key: TreeNodeKeyType) => TreeNode | null;
    getTreeData: () => TreeNode[];
    getFlatData: () => TreeNode[];
    getNodesCount: () => number;
    insertBefore: (insertedNode: TreeNodeKeyType | import("../store/tree-node.js").ITreeNodeOptions, referenceKey: TreeNodeKeyType) => TreeNode | null;
    insertAfter: (insertedNode: TreeNodeKeyType | import("../store/tree-node.js").ITreeNodeOptions, referenceKey: TreeNodeKeyType) => TreeNode | null;
    append: (insertedNode: TreeNodeKeyType | import("../store/tree-node.js").ITreeNodeOptions, parentKey: TreeNodeKeyType) => TreeNode | null;
    prepend: (insertedNode: TreeNodeKeyType | import("../store/tree-node.js").ITreeNodeOptions, parentKey: TreeNodeKeyType) => TreeNode | null;
    remove: (removedKey: TreeNodeKeyType) => TreeNode | null;
    filter: (keyword: string, filterMethod?: import("../store/tree-store.js").FilterFunctionType | undefined) => void;
    showCheckedNodes: (showUnloadCheckedNodes?: boolean | undefined) => void;
    loadRootNodes: () => Promise<void>;
    scrollTo: (key: TreeNodeKeyType, verticalPosition?: number | "bottom" | "top" | "center") => void;
    clearKeyword: () => void;
    getKeyword: () => string;
    search: (keyword1?: string | undefined) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<TreeDropProps>, {
    dropHeight: number;
    dropDisabled: boolean;
    clearable: boolean;
    placement: placementEnum;
    transfer: boolean;
    dropdownWidthFixed: boolean;
    searchPlaceholder: string;
    showCheckAll: boolean;
    showCheckedButton: boolean;
    checkedButtonText: string;
    showFooter: boolean;
    searchLength: number;
    searchDisabled: boolean;
    searchRemote: boolean;
    searchDebounceTime: number;
    data: () => never[];
    unloadDataList: () => never[];
    showUnloadCheckedNodes: boolean;
    emptyText: string;
    titleField: string;
    keyField: string;
    separator: string;
    checkable: boolean;
    selectable: boolean;
    filteredNodeCheckable: boolean;
    cascade: boolean;
    enableLeafOnly: boolean;
    disableAll: boolean;
    defaultExpandAll: boolean;
    defaultExpandedKeys: () => never[];
    expandedKeys: () => never[];
    draggable: boolean;
    droppable: boolean;
    beforeDropMethod: () => () => boolean;
    ignoreMode: import("../constants").ignoreEnum;
    autoLoad: boolean;
    expandOnFilter: boolean;
    unselectOnClick: boolean;
    loading: boolean;
    nodeMinHeight: number;
    nodeIndent: number;
    renderNodeAmount: number;
    bufferNodeAmount: number;
}>>>, {
    keyField: string;
    ignoreMode: "none" | "parents" | "children";
    filteredNodeCheckable: boolean;
    cascade: boolean;
    defaultExpandAll: boolean;
    expandOnFilter: boolean;
    data: import("../types").AnyPropsArrayType;
    titleField: string;
    checkable: boolean;
    selectable: boolean;
    unselectOnClick: boolean;
    disableAll: boolean;
    draggable: boolean;
    droppable: boolean;
    nodeIndent: number;
    emptyText: string;
    separator: string;
    showUnloadCheckedNodes: boolean;
    unloadDataList: import("../types").AnyPropsArrayType;
    enableLeafOnly: boolean;
    defaultExpandedKeys: TreeNodeKeyType[];
    expandedKeys: TreeNodeKeyType[];
    beforeDropMethod: (dragKey: TreeNodeKeyType, dropKey: TreeNodeKeyType, hoverPart: import("../constants").dragHoverPartEnum) => boolean;
    autoLoad: boolean;
    loading: boolean;
    renderNodeAmount: number;
    nodeMinHeight: number;
    bufferNodeAmount: number;
    searchPlaceholder: string;
    showCheckAll: boolean;
    showCheckedButton: boolean;
    checkedButtonText: string;
    showFooter: boolean;
    searchLength: number;
    searchDisabled: boolean;
    searchRemote: boolean;
    searchDebounceTime: number;
    dropHeight: number;
    dropDisabled: boolean;
    clearable: boolean;
    placement: "bottom-start" | "bottom-end" | "bottom" | "top-start" | "top-end" | "top";
    transfer: boolean;
    dropdownWidthFixed: boolean;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
    default?(_: {
        checkedNodes: {
            [x: string]: any;
            _level: number;
            checked: boolean;
            selected: boolean;
            indeterminate: boolean;
            disabled: boolean;
            expand: boolean;
            visible: boolean;
            _filterVisible: boolean;
            _parent: any | null;
            children: any[];
            isLeaf: boolean;
            _loading: boolean;
            _loaded: boolean;
            readonly _keyField: string;
            readonly _remote: boolean;
            setChildren: (children: import("../store/tree-node.js").ITreeNodeOptions[]) => void;
        }[];
        checkedKeys: TreeNodeKeyType[];
        selectedNode?: {
            [x: string]: any;
            _level: number;
            checked: boolean;
            selected: boolean;
            indeterminate: boolean;
            disabled: boolean;
            expand: boolean;
            visible: boolean;
            _filterVisible: boolean;
            _parent: any | null;
            children: any[];
            isLeaf: boolean;
            _loading: boolean;
            _loaded: boolean;
            readonly _keyField: string;
            readonly _remote: boolean;
            setChildren: (children: import("../store/tree-node.js").ITreeNodeOptions[]) => void;
        } | undefined;
        selectedKey?: TreeNodeKeyType | undefined;
    }): any;
    display?(_: {
        checkedNodes: {
            [x: string]: any;
            _level: number;
            checked: boolean;
            selected: boolean;
            indeterminate: boolean;
            disabled: boolean;
            expand: boolean;
            visible: boolean;
            _filterVisible: boolean;
            _parent: any | null;
            children: any[];
            isLeaf: boolean;
            _loading: boolean;
            _loaded: boolean;
            readonly _keyField: string;
            readonly _remote: boolean;
            setChildren: (children: import("../store/tree-node.js").ITreeNodeOptions[]) => void;
        }[];
        checkedKeys: TreeNodeKeyType[];
        selectedNode?: {
            [x: string]: any;
            _level: number;
            checked: boolean;
            selected: boolean;
            indeterminate: boolean;
            disabled: boolean;
            expand: boolean;
            visible: boolean;
            _filterVisible: boolean;
            _parent: any | null;
            children: any[];
            isLeaf: boolean;
            _loading: boolean;
            _loaded: boolean;
            readonly _keyField: string;
            readonly _remote: boolean;
            setChildren: (children: import("../store/tree-node.js").ITreeNodeOptions[]) => void;
        } | undefined;
        selectedKey?: TreeNodeKeyType | undefined;
    }): any;
    clear?(_: {}): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
