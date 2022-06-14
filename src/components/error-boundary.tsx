import * as React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  FallbackComponent: React.FunctionComponent<{ error: Error }>;
};

type ErrorBoundaryState = {
  error: null | Error;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;

    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }

    return this.props.children;
  }
}
