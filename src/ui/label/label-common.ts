import { Label } from 'tns-core-modules/ui/label';
import '../core/view';

import { addPropertyToView, Property } from '../../utils/helpers';

export const accessibilityAdjustsFontSizeProperty: Property<Label, boolean> = addPropertyToView<Label, boolean>(Label, 'accessibilityAdjustsFontSize');

export { Property } from 'tns-core-modules/ui/core/properties/properties';
export { Label } from 'tns-core-modules/ui/label';
