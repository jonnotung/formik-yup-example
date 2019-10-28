export const withNameSpace = (namespace, fieldName) => {
    return namespace ? `${namespace}.${fieldName}` : fieldName
}